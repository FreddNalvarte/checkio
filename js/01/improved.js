function isUnique(arr, el) {
    return arr.filter(a => a === el).length === 1
}
function nonUniqueElements(data) {
    return data.filter(item => !isUnique(data, item))
}
console.log(nonUniqueElements([1,2,3,1,3,]))