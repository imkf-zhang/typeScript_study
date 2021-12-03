function handle2(): string  {
    return "你好"
}
function  handle3(): undefined  {
    return undefined
}

function handle4(a:string,b:number): string|number {
    return "hellohello"
}

let res = handle4('hello',66)

console.log(res)