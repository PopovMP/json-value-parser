'use strict'

const {strictEqual}  = require('assert')
const {describe, it} = require('@popovmp/mocha-tiny')
const {parseJsonValue}  = require('../index.js')

describe('json-value-parser', () => {

	describe('parseJsonValue', () => {
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

		it('parses JSON values', () => {
			strictEqual(
				JSON.stringify(obj),
				'{"foo":"bar","iNum":42,"iPos":42,"iNeg":-42,"fNum":3.14,"fPos":0.14,"fNeg":-3.1,"true":true,"false":false,"nil":null}')
		})
	})
})
