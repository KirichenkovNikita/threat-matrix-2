/*
*    ------ BEGIN LICENSE ATTRIBUTION ------
*    
*    Portions of this file have been appropriated or derived from the following project(s) and therefore require attribution to the original licenses and authors.
*    
*    Repositories:
*     - repo: https://github.com/App-vNext/Polly/blob/v5.4.0/src/Polly.Shared/Caching/RelativeTtl.cs release version: v5.4.0  asset relative path: src/Polly.Shared/Caching/RelativeTtl.cs
*    
*    Copyrights:
*    
*    Licenses:
*     - BSD 3-Clause "New" or "Revised" License
*       SPDXId: BSD-3-Clause
*    
*    Auto-attribution by Threatrix, Inc.
*    
*    ------ END LICENSE ATTRIBUTION ------
*/
﻿using System;
using Polly.Utilities;

namespace Polly.Caching
{
    /// <summary>
    /// Defines a ttl strategy which will cache items until the specified point-in-time.
    /// </summary>
    public class RelativeTtl : NonSlidingTtl
    {
        private static readonly TimeSpan DateTimeOffSetMaxTimeSpan = DateTimeOffset.MaxValue.Subtract(DateTimeOffset.MinValue);

        /// <summary>
        /// Initializes a new instance of the <see cref="RelativeTtl"/> class.
        /// </summary>
        /// <param name="ttl">The timespan for which to consider the cache item valid.</param>
        public RelativeTtl(TimeSpan ttl) : base(
            ttl < TimeSpan.Zero ? throw new ArgumentOutOfRangeException(nameof(ttl), "The ttl for items to cache must be greater than zero.")
            :
            ttl == TimeSpan.MaxValue ? DateTimeOffset.MaxValue
            :
            ttl >= DateTimeOffSetMaxTimeSpan ? DateTimeOffset.MaxValue
            :
            SystemClock.DateTimeOffsetUtcNow() > DateTimeOffset.MaxValue.Subtract(ttl) ? DateTimeOffset.MaxValue
            :
            SystemClock.DateTimeOffsetUtcNow().Add(ttl))
        {
        }
    }
}
