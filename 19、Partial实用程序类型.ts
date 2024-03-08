// Partial 是 TS 中的一个工具类型（Utility Type），
// 它的作用只有一个：将一个对象类型中的所有属性变为可选属性。
// 换句话说，Partial<T> 接受一个泛型参数 T，并返回一个新的类型，新类型与 T 相同，
// 但是 T 类型中的所有属性都变为可选属性。

// 快速把某个接口类型中定义的属性变成可选

type Usery = {
   name: string
   password: string
   address: string
   phone: string
}

// 有一个类型，拥有的类型是Usery的可选

type PartialUsery = {
  name?: string
  password?: string
  address?: string
  phone?: string
}
// 如上述，就很不友好
// 友好的表达书写
type PartialUsery1 = Partial<Usery>


// Partial是怎样实现的呢, 源码如下：
// type Partial<T> = {
//   [P in keyof T]?: T[P]
// }
// 这段源码使用关键字 in 和操作符 keyof 定义了一个映射类型。
// in 关键字，这个关键字的作用是用于映射类型的。在这里 in 表示的是迭代联合类型中的每个属性，而泛型 P 就表示这些属性



interface Person {    monicker: string;    age: number;    sex?: string;}
/*** type PersonOptions = {*   name: string;*   age: number;*   sex: string;* }*/
type PersonRequired = Required<Person>; 
// 实现原理
type Required<T> = {    [P in keyof T]-?: T[P]  }
  // `-?` 符号是一个操作符，用于将属性变为必需的，即必须存在并且不能为 undefined 或 null。}


// 实现原理/** * Make all properties in T readonly */
type Readonly<T> = {  readonly [P in keyof T]: T[P];};