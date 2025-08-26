/*
*    ------ BEGIN LICENSE ATTRIBUTION ------
*    
*    Portions of this file have been appropriated or derived from the following project(s) and therefore require attribution to the original licenses and authors.
*    
*    Repositories:
*     - repo: http://spring.io/projects/spring-security release version: null  asset relative path: RsaKeyConverters.java
*     - repo: https://github.com/spring-projects/spring-security release version: 5.8.13  asset relative path: core/src/main/java/org/springframework/security/converter/RsaKeyConverters.java
*    
*    Copyrights:
*     - copyright 2002-2021 the original author or authors
*    
*    Licenses:
*     - Eclipse Public License 2.0
*       SPDXId: EPL-2.0
*     - Apache License 2.0
*       SPDXId: Apache-2.0
*    
*    Auto-attribution by Threatrix, Inc.
*    
*    ------ END LICENSE ATTRIBUTION ------
*/
public static Converter<InputStream, RSAPrivateKey> pkcs8() {
    KeyFactory keyFactory = rsaFactory();
    return (source) -> {
        List<String> lines = readAllLines(source);
        Assert.isTrue(!lines.isEmpty() && lines.get(0).startsWith(PKCS8_PEM_HEADER),
            "Key is not in PEM-encoded PKCS#8 format, please check that the header begins with "
                + PKCS8_PEM_HEADER);
        StringBuilder base64Encoded = new StringBuilder();
        for (String line : lines) {
            if (RsaKeyConverters.isNotPkcs8Wrapper(line)) {
                base64Encoded.append(line);
            }
        }
        byte[] pkcs8 = Base64.getDecoder().decode(base64Encoded.toString());
        try {
            return (RSAPrivateKey) keyFactory.generatePrivate(new PKCS8EncodedKeySpec(pkcs8));
        }
        catch (Exception ex) {
            throw new IllegalArgumentException(ex);
        }
    };
}
