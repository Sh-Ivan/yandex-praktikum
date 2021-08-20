function flatten(arr) {
    var flattenArr = [];
    arr.forEach(function (el) {
        if (Array.isArray(el)) {
            flattenArr.push.apply(flattenArr, flatten(el));
        }
        else {
            flattenArr.push(el);
        }
    });
    return flattenArr;
}
var testArray = ['a', ['b', [1, 'd'], 'e', ['f', ['g', 'h']]]];
console.log(flatten(testArray));
