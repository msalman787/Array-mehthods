// Asc, Des, Min & Max values with unique array  
let array = [1, 1, 2, 43, 65, 761, 4, 5, 3, 4, 5, 6, 7, 1, 1];
const answer = Array.from(new Set(array));

const ascArray = answer.sort((a, b) => a - b);
console.log({ ascArray });
const decArray = answer.sort((a, b) => b - a);
console.log({ decArray });
console.log(Math.max.apply(null, ascArray));
console.log(Math.min.apply(null, ascArray));

// ========== ================
// ******
// *****
// ****
// ***
// **
// *

// let rows = 5;
// let columns = 6
// let string = ""
// for (let row = 0; row < rows; row++) {
//      for (let column = columns - row;  column > 0; column--) {
//         string += "*";
//     }
//         string += "\n"
// }
// console.log(string)

// ============ Find Longest word ===========
// const message = 'Hello world hwllow ' // Try edit me
// let words = message.split(" ")
// let longestWord = ""
// for(let i=0; i<words.length; i++ ){
//   if(words[i].length > longestWord.length){
//     longestWord = words[i]
//   }
// }
// console.log(longestWord)
