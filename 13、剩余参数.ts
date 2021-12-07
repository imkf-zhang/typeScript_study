function add1 (x: number, y: number, ...restOfNum: number[]): void {
 let resNum: number = x + y;
 for( let ele of restOfNum ) {
     resNum += ele
 }
 console.log(resNum)
}

add1(1,2)  // 3
add1(1,2,6,8,9) // 26
