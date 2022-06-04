// 函数是javascript的一等公民

// 定义函数的两种常用方式：函数声明（Function Declaration）和函数表达式（Function Expression）

function sayHi1() {
  console.log('hello, world')
}

let kate2 = function sayHi2() {
   console.log('hello, world')
}

// 函数有输入和输出 所以函数在ts函数进行类型约束的时候就要考虑到它的输入和输出

// 函数声明比较好处理   需要注意: 输入多余的或者少于参数，都是不被允许的
function sayHi3(x:number,y:number): number {
  return x + y
}

sayHi3(1,5)
// sayHi3(2,5,7) //Expected 2 arguments, but got 3.
// sayHi3(5) // An argument for 'y' was not provided.


// 函数表达式就比较复杂了
let kate3: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}
// ts中的 =>用来表达函数的定义: 左边是输入类型，需要用括号括起来，右边是输出类型


// 用接口定义函数的形状
// 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，
// 可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变
interface SayHi4 {
  (x: number, y: number): number;
}
let sayhi6: SayHi4 = function(x: number, y: number) { return x+y}


// 可选参数
// 既然参数多了或者少了在ts中是不被允许，但是就是有一些情况确实参数是不确定的可能会多，有可能会少
// 使用 ?: 来表达可选参数

function sayhi7(x: number, y?: number): void {
  if(y) {
    console.log(x + y)
  } else {
    console.log(x)
  }
}
sayhi7(1) // 并不会报错
sayhi7(2,5)

// function sayhi8( y?: number, x: number): void {
//   if(y) {
//     console.log(x + y)
//   } else {
//     console.log(x)
//   }
// }  //  A required parameter cannot follow an optional parameter.
// sayhi8(1) 
// sayhi8(2,5);


// 参数默认值
// 允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数

// 此时就不受「可选参数必须接在必需参数后面」的限制了：
function buildName(firstName?: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

function buildNameOther(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}


// 剩余参数
// 可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）

function push(array: any[], ...items:any []) {
  items.forEach(item => {
    array.push(item)
  })
}

let a: any[] = []
push(a, 1,2,3,4)


// 重载
// 何为重载？ 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
// 比如，我们需要实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，
// 输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。
// 利用联合类型，我们可以这么实现：
// function reverse(x: number | string): number | string | void {
//   if (typeof x === 'number') {
//       return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//       return x.split('').reverse().join('');
//   }
// }
// 然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，
// 输入为字符串的时候，输出也应该为字符串。

// 这时，我们可以使用重载定义多个 reverse 的函数类型
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。