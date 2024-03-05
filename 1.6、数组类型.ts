let numArr: number[] = [1,2,3,4];

// numArr.push('5')

// let numArr: number[] = ['1',2,3];


// 用接口来表达数组
interface NumberArr {
  [index: number]: number
}
let kateNumber: NumberArr = [1, 2, 3, 4, 5]

interface Sum {
  [index: number]: number;
  length: number;
  callee: Function
}
function sum1() {
 let args: Sum = arguments
}

function sum2() {
  let args: IArguments = arguments;
}

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK