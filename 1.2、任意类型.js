// 任何一个类型，赋值后是不允许更改的（当然子类当然可以给父类）
// let aa: number = 1;
// aa = "kate";  // Type 'string' is not assignable to type 'number'.
// 这个时候any就会出现了 如果是any类型的变量可以在赋值给任意类型的数据
var m = 'kate1';
m = 1;
// 任意值  的属性和方法 
// 在任意值上访问任何属性和方法都是允许的
var n1 = 8989;
console.log(n1.name);
console.log(n1.sayName);
