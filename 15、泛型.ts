// 有些场景，我们直接将类型定义好是不妥当的，因为类型可能依赖于业务传入的类型，而业务传入的类型又是动态的，传入什么，谁知道呢


// 这个例子虽然不会报错，但是我们很难说这个类型规范的准确
function createArray(length: number, value: any): Array<any> {
  let result = []
  for (let index = 0; index < length; index++) {
    result[index] = value   
  }
  return result
}
createArray(3, 'x'); // ['x', 'x', 'x']


// 泛型的作用就体现出来了
function createArrayOther<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let index = 0; index < length; index++) {
    result[index] = value
  }
  return result;
}
createArrayOther<string>(3, 'x'); // ['x', 'x', 'x']
createArrayOther(3, 'x'); // ['x', 'x', 'x']

function createArrayOther1<M>(length: number, value: M): Array<M> {
  let result: M[] = []
  for (let index = 0; index < length; index++) {
    result[index] = value
  }
  return result;
}
createArrayOther1<string>(3, 'x'); // ['x', 'x', 'x']
createArrayOther1(3, 'x'); // ['x', 'x', 'x']


// 问题又来了，有多个类型参数，用泛型怎么来表达呢

function swap<T,U>(tuple: [T,U]): [U,T] {
  return [tuple[1],tuple[0]]
}
swap([7,'seven']) // ['seven', 7]


//函数内部使用泛型变量的时候，事先是无法知道是那种类型，所以是不能随意操作它的属性和方法

// function printLength<T>(arg: T): T {
//   console.log(arg.length)
//   return arg
// }

//类型变量可以继承接口 

interface instanceLength {
  length: number
}
function printLength<T extends instanceLength>(arg: T): T {
  console.log(arg.length)
  return arg
}

// printLength(7)


// 多个参数类型之间也可以相互约束

function copy<T extends U, U>(target: T, source: U): T {
  for (const key in source) {
    target[key] = (<T>source)[key]
  }
  return target
}


// 泛型接口

let kate0: (x: number, y: number) => number = function(x: number,y:number): number {
  return x + y
}
interface addInstance {
  (x: number, y: number): number
}
let kate12: addInstance = function(x: number,y:number): number {
  return x + y
}


interface CreateArray {
  <T>(length: number, value: T): Array<T>
}
let creatArr: CreateArray = function <T>(length: number, value: T): Array<T> {
  let result: T[]= [];
  for (let index = 0; index < length; index++) {
    result[index] = value
  }
  return result
}
creatArr(3, 'X')


// 上面的可以改写为
interface CreateArray1<T> {
  (length: number, value: T): Array<T>
}
let creatArr1: CreateArray1<any> = function <T>(length: number, value: T): Array<T> {
  let result: T[]= [];
  for (let index = 0; index < length; index++) {
    result[index] = value
  }
  return result
}
creatArr1(3, 'X')



// 泛型类

// class ShuziNumber<T> {
//  public zeroValue: T;
//  public add: (x: T, y: T) => T;
// }

// let shuziStance = new ShuziNumber<number>()
// shuziStance.zeroValue = 0
// shuziStance.add = function(x,y) {
//   return x + y
// }

// class GenericNumber<T> {
//   zeroValue: T ;
//   add: (x: T, y: T) => T;

// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };



// 泛型的类型参数可以设置默认值
function createArrayOther12<T = string>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let index = 0; index < length; index++) {
    result[index] = value
  }
  return result;
}
createArrayOther12<string>(3, 'x'); // ['x', 'x', 'x']
createArrayOther12(3, 'x'); 