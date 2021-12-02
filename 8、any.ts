// any的使用  不确定对方的返回值的时候，可以使用any
let dom: any = "string"
let dom1: any = null

// void的使用  函数没有返回值的时候 
// 在ts中规定函数必须要定义返回值类型，没有返回值的时候就用void
function sayHi():string {
    return 'hello'
}
let re1 = sayHi()

function sayHi2(): void {
    console.log('欲穷千里目')
}

// never  不存在的值，mmp不存在的值还有返回值  常用语抛出异常和无线循环的函数返回类型

function test():never {
    while(true) {

    }
}
test()
function test2():never {
    throw new Error('hello')
}
test2()


