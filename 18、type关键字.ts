// type 给类型起个新名字

type test = number
let num: test = 99

type userObj = {name: string}
type pur = [string,number]

type lianhe = test | userObj | pur


//type 和 interface 区别

// 1、和接口一样，用于描述对象和函数的类型

type User1 = {
  name: string
  age: number
}
interface User1other {
  name: string
  age: number
}
type SetUser = (name: string, age: number) => void
interface SetUser1 {
  (x: number, y: number): void;
}

// 2、扩展和实现（extends implement）

// interface可以实现扩展，type可以通过交叉实现interface的extends行为
// interface可以extends type，同时type也可以与interface类型交叉

interface Name {
  name: string
}
interface User2 extends Name {
  age: number
}
let ka: User2 = {name:'dang',age: 12}

type Name1 = {
  name: string
}
type User3 = Name1 & {age: number}
let kaa: User3 = {name: 'dang1', age: 13}


type Name2 = {
  name: string
}
interface User5 extends Name2 {
   age: 12
}
let kaaa: User5 = {name: 'dang2',age: 12 }



interface Name3  {
  name: string
}
type User6 = Name3 & {age: number}
let kaaaa: User6 = {name: 'dang3', age: 12
}


// 映射类型
// type 能使用in关键字生成映射类型，但是interface不行

type Keys1 = 'name' | 'sex'
type Dunkeys = {
  [key in Keys1]: string
}
let studeny: Dunkeys = {
  name: 'll',
  sex: '12'
}
