class City {
    // 成员变量定义在类中(需要赋个值，要不会报语法错误，也可以是在构造函数中赋值)
    cname:string = 'p城';
    clevel: number = 2;
    cname1:string;
    clevel1: number;
    
    // 构造函数：做初始化
    constructor(cName: string,cLevel: number) {
        this.cname1 = cName;
        this.clevel1 = cLevel;
    }

    // 成员方法：定义在类中
    about() {
        console.log(`兄弟，跳${this.cname1},危险系数为${this.clevel1}级`);
    }
}
let c1 = new City('皮卡多',9)
console.log(c1.cname,c1.cname1) //p城      皮卡多
c1.about()  // 兄弟，跳皮卡多,危险系数为9级