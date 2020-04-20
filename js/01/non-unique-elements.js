/*
# EXAMPLES:
nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
*/

function isUnique(arr, el) {
    var hasOne = false;
    for (let item of arr) {
        if (item === el) {
            if (hasOne) {
                return false;
            } else {
                hasOne = true;
            }
        }
    }
    return true;
}
console.log(isUnique([1,2,3,1,3], 3))

function nonUniqueElements(data) {
    const new_result = []
    for (let item of data) {
        if (!isUnique(data, item)) {
            new_result.push(item)
        }
    }
    return new_result;
}
console.log(nonUniqueElements([1,2,3,1,3,]))

// Another form
// function isUnique(arr, el) {
//     return arr.filter(a => a === el).length === 1
// }
// function nonUniqueElements(data) {
//     return data.filter(item => !isUnique(data, item))
// }
// console.log(nonUniqueElements([1,2,3,1,3,]))