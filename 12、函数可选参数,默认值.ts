function bugGun(gunName:string,count?:number) {
    console.log(`有眼光~【${gunName}】是
    村里最好的强，送你[${count}]把，咱们P城来相见`)
}
bugGun('Ak')
// 不传的话默认是undefined
//有眼光~【Ak】是
// 村里最好的强，送你[undefined]把，咱们P城来相见


function bugGun1(gunName:string,count?:number) {
    console.log(`有眼光~【${gunName}】是
    村里最好的强，送你[${count? count: 1}]把，咱们P城来相见`)
}
bugGun1('m24')
// 有眼光~【m24】是
// 村里最好的强，送你[1]把，咱们P城来相见



function bugGun2(gunName: string = "awm", count: number = 5) {
    console.log(`有眼光~【${gunName}】是
    村里最好的强，送你[${count? count: 1}]把，咱们P城来相见`)
}
// 两个参数都不传
bugGun2() 
//有眼光~【awm】是
//村里最好的强，送你[5]把，咱们P城来相见

// 前传后不传
bugGun2('ak')
//有眼光~【ak】是
//村里最好的强，送你[5]把，咱们P城来相见

// 前不传后传
bugGun2(undefined,99)
//有眼光~【awm】是
//村里最好的强，送你[5]把，咱们P城来相见