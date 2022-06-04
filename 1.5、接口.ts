interface Person {
  age: number;
  name?: string;
}

let kate: Person = {
  age:  888,
  name: 'kate'
}
let kateOther: Person = {
  age:  888,
}
// 任意属性
interface Box {
  height: number;
  color: string;
  [propName: string]: number | string
}

let box1: Box = {
  height: 888,
  color: '#f60',
  weight: '999'
}
// 只读属性
interface Flow  {
  color: string;
  num: number;
  readonly type: string;
}

let meigui: Flow = {
  type: 'guihua',
  color: 'red',
  num: 999,  
}
// meigui.type = 'guihua'
