/*
*    ------ BEGIN LICENSE ATTRIBUTION ------
*    
*    Portions of this file have been appropriated or derived from the following project(s) and therefore require attribution to the original licenses and authors.
*    
*    Repositories:
*     - repo: https://github.com/spring-projects/spring-boot-data-geode release version: -  asset relative path: /null/mixed1.java
*     - repo: https://github.com/json-iterator/go release version: v1.1.12  asset relative path: type_tests/map_key_test.go
*    
*    Copyrights:
*     - copyright 2017-present the original author or authors
*     - copyright 2002-2016 the original author or authors
*    
*    Licenses:
*     - MIT License
*       SPDXId: MIT
*     - Apache License 2.0
*       SPDXId: Apache-2.0
*    
*    Auto-attribution by Threatrix, Inc.
*    
*    ------ END LICENSE ATTRIBUTION ------
*/
package test

import (
	"encoding"
	"strings"
)

func init() {
	testCases = append(testCases,
		(*map[stringKeyType]string)(nil),
		(*map[structKeyType]string)(nil),
	)
}

type stringKeyType string

func (k stringKeyType) MarshalText() ([]byte, error) {
	return []byte("MANUAL__" + k), nil
}

func (k *stringKeyType) UnmarshalText(text []byte) error {
	*k = stringKeyType(strings.TrimPrefix(string(text), "MANUAL__"))
	return nil
}

var _ encoding.TextMarshaler = stringKeyType("")
var _ encoding.TextUnmarshaler = new(stringKeyType)

type structKeyType struct {
	X string
}

func (k structKeyType) MarshalText() ([]byte, error) {
	return []byte("MANUAL__" + k.X), nil
}

func (k *structKeyType) UnmarshalText(text []byte) error {
	k.X = strings.TrimPrefix(string(text), "MANUAL__")
	return nil
}

var _ encoding.TextMarshaler = structKeyType{}
var _ encoding.TextUnmarshaler = &structKeyType{}
