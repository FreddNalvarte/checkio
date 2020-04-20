const isUnique = (arr, el) =>{
    let hasOne = false
    for(let item of arr){
        if (item === el){
            if (hasOne) return false
            else hasOne = true
        }
    }
    return true
}

console.log(isUnique([1,2,3,2], 1))