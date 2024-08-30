let name = "Sample"
const value = 20

console.log(`This here is the ${name} and ${value}`)

let myName = new String('Sai-Krishna')

console.log(myName);

// console.log(myName.length)
// console.log(myName.toUpperCase())

console.log(myName.charAt(5))
console.log(myName.indexOf('i'))
// console.log(myName.trim())

const newStr = myName.substring(0, 3)
console.log(`Hello ${newStr}`)

const anotherStr = myName.slice(-1, 10)
console.log(anotherStr)

console.log(myName.split('-'))

const url = 'https://localhost:3000/user/sai%20krishna'
console.log(url.replace('%20', '-'))
console.log(url.includes('sai'))