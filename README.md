# TOTP
TOTP library - supports various algorithms, otp lengths, etc.

(c) 2020 TekMonks

## getSecret(length)
Returns a BASE32 encoded secret string for TOTP.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| length | <code>number</code> | <code>20</code> | Length of secret in bytes, default is 20. Optional. |

## getTOTP(secret, duration, algorithm, digits, time0)
Returns a new OTP.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| secret | <code>number</code> |  | The secret key. Base 32 encoded. Required. |
| duration | <code>number</code> | <code>30</code> | The selected TOTP duration, default is 30 seconds. Optional. |
| algorithm | <code>string</code> | <code>&quot;sha1&quot;</code> | The TOTP algorithm. Refer to algorithms supported by Node.js crypto. Optional. |
| digits | <code>number</code> | <code>6</code> | The TOTP digits. Default is 6. Optional. |
| time0 | <code>number</code> | <code>0</code> | Time 0. Default is 0. Optional. |


## verifyTOTP(secret, token, historicalWindows, duration, algorithm)
Verifies the TOTP, returns true or false.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| secret | <code>string</code> |  | The TOTP secret key. Base 32 encoded. Required. |
| token | <code>number</code> |  | The incoming token. Required. |
| historicalWindows | <code>number</code> | <code>1</code> | Historical windows to look back, default is 1. Optional |
| duration | <code>number</code> | <code>30</code> | The selected TOTP duration, default is 30 seconds. Optional. |
| algorithm | <code>string</code> | <code>&quot;sha1&quot;</code> | The TOTP algorithm. Refer to algorithms supported by Node.js crypto. Optional. |


## getTOTPURL(provider, secret, issuer, algorithm, digits, duration)
Returns the TOTP URL.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| provider | <code>string</code> |  | The provider or service name. Required. |
| secret | <code>string</code> |  | The TOTP secret. Base 32 encoded. Required. |
| issuer | <code>string</code> | <code>&quot;TekMonks&quot;</code> | The issuer. Required. |
| algorithm | <code>string</code> | <code>&quot;sha1&quot;</code> | The algorithm. Default is SHA1. Optional. |
| digits | <code>number</code> | <code>6</code> | The TOTP digits. Default is 6. Optional. |
| duration | <code>number</code> | <code>30</code> | The TOTP duration. Default is 30, for 30 seconds. Optional. |

