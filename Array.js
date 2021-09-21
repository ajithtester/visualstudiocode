let array = ["hai" ,'how', 'are', 'you']
console.log(array)

array.push('haan') //addlast
console.log(array)

console.log(array.pop()) //removelast
console.log(array)

array.unshift('haan2') //addfirst
console.log(array)

console.log(array.shift()) //removefirst
console.log(array)

console.log(array.join())
let arr =  array.slice(0,1)
console.log(arr +'check this')

console.log(array.splice(1, 2)) //removefirst
console.log(array)


let odd = [1,2,3,4]
let prime = [5,6,7,8]
let even = [9,10]
let numbers = odd.concat(prime , even)
let numbers2 = odd.concat(even , prime)

console.log(numbers)
console.log(numbers2)



console.log(array.join())

