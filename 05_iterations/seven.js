const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => { return num + 10})
// console.log(newNums);

// const dummyNums = []

// myNumbers.forEach((num) => {
//   dummyNums.push(num+10)
// })
// console.log(dummyNums);

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num * 10)
                .filter((num) => num >= 600)

console.log(newNums)

