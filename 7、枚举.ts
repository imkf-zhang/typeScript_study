// 枚举（enum）：用一种标识来代表数值，方便程序员理解

// 创建性别枚举
enum Gender {
    Boy = 1,
    Girl = 2,
    Unknow = 3
}
console.log(Gender.Boy)  // 1 
console.log(Gender.Girl) // 2
console.log(Gender.Unknow) // 3

enum Gender2 {
    Boy,
    Girl,
    Unknow
}
console.log(Gender2.Boy) // 0
console.log(Gender2.Girl) // 1
console.log(Gender2.Unknow) // 2

// 使用枚举
let usrSex:Gender = Gender.Boy
console.log(usrSex)  //1