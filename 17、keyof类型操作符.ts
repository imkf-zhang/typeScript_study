//  ts中有很多的工具类型： Partial部分、Required必填项、Pick选择、Record 记录

// js中Object.keys方法
const keys = Object.keys({id: 12,name:'z'}) // ['id', 'name']

// 在ts中操作的是类型，获取对象类型中全部的键，就需要使用keyof类型操作符，
// 该操作符在TypeScript 2.1中引入，用于获取类型中的所有键，其返回类型为联合类型。​​​​​​​



// 对象类型

type User = {
  id: number;
  name: string
}
type Userkeys= keyof User // "id"|"name"

type U1 = User["id"] // number
type U2 = User["name"] // string
type U3 = User[keyof User] //string | number


// keyof操作符在实践中有何用？

// function getValue(obj: Object, key: string) {
//   return obj[key]
// }
// const userkate = {
//   id: 666,
//   name: 'kate'
// }

function getValue<T extends Object, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
const userkate = {
  id: 666,
  name: 'kate'
}
// 类型参数T，  extends 用于将类型参数的实际类型约束为对象类型的子类型
// K也使用 extends 将类型参数的实际类型约束为对象类型的所有键的联合类型的子类型
let id = getValue(userkate, 'id')
let name45= getValue(userkate, 'name')
// let sex = getValue(userkate, 'sex') 
// Argument of type '"sex"' is not assignable to parameter of type '"id" | "name"'.


// keyof 类型操作符不仅可以应用于对象类型，还可以应用于基本数据类型、任何类型、类和枚举类型

type K1 = typeof Boolean // 'valueOf'
type K2 = keyof number // "toString" | "toFixed" | 'valueOf' | .....
type K3 = keyof any // string | number | symbol

class Person1 {
  id: number = 9;
  name: string = 'zl'
}
type P = keyof Person1 // 'id' | 'name'

enum Http {
  get,
  post
}
type Methods = keyof typeof Http // 'get'|'post'