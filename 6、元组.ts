// ts比较僵硬呀，元组规定的类型有几个，后面也就必须写几个，要不会报错，不能多写
let tuple:[string,number,boolean] = ['55',55,false]

// 访问元组的长度和元素
console.log(tuple.length) // 3
console.log(tuple[2]) // false