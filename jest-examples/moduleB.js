"use strict";
exports.__esModule = true;
function getMessage(num) {
    return "Her name is " + genName(num) + ", age is " + getAge();
}
exports.getMessage = getMessage;
function genName(num) {
    return 'novaline';
}
exports.genName = genName;
function getAge() {
    return 26;
}
exports.getAge = getAge;
