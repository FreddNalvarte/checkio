const arr = [1,3,2,1,3]


const isUnique = (arr, el)=>{
    let hasOne = false
    for (i of arr){
        if(i === el){
            if(hasOne) return false
            else hasOne = true
        }
    }
    return true
}
console.log(isUnique(arr,2))

const newArr = []

// for (el of arr){
//     newArr.push(el)
// }

const newArr2 = arr.map(el => el)

console.log('newArr: ', newArr)
console.log(newArr2)



// for (el of arr){
//     if(!isUnique(arr, el)) newArr.push(el)
// }
// console.log('NU: ', newArr)
//
// arr.forEach((el,i,arr) => {
//     if(!isUnique(arr,el)) newArr.push(el)
// })


console.log('NU: ', newArr)