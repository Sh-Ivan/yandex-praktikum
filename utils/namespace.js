"use strict";
exports.__esModule = true;
var namespace = function (str) {
    return str.split('.').reduceRight(function (obj, value) {
        var _a;
        return (_a = {}, _a[value] = obj, _a);
    }, {});
};
console.log(namespace('a.b.c.d.e')); // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"
exports["default"] = namespace;
