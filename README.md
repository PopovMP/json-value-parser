# Parses JSON values to number, boolean, null, or string

Code:
```javascript
const {parseJsonValue} = require('@popovmp@json-value-parser')

const json = {
	"foo"  :  "bar",
    "iNum" :   "42",
    "iPos" :  "+42",
    "iNeg" :  "-42",
    "fNum" : "3.14",
    "fPos" : "+.14",
    "fNeg" : "-3.1",
    "true" : "true",
    "false": "false",
    "nil"  : "null"
}

const obj = {}

for (const key of Object.keys(json))
	obj[key] = parseJsonValue(json[key])
```

```js
const obj = {
	foo  : 'bar',
	iNum :    42,
	iPos :    42,
	iNeg :   -42,
	fNum :  3.14,
	fPos :  0.14,
	fNeg :  -3.1,
	true :  true,
	false: false,
	nil  :  null,
}
```
