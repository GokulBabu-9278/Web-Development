/*var uc= require('upper-case')
var u=uc.upperCase('hello world')
console.log(u)*/

import { upperCase, localeUpperCase } from "upper-case";

var u = upperCase("hello world")
var lu = localeUpperCase("string", "tr")

console.log(u)
console.log(lu)