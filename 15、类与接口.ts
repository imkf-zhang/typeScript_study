interface Alarm {
  alert(): void;
}
class Door {

}
class SecurityDoor extends Door implements Alarm {
  alert(): void {
      console.log('SecurityDoor alert')
  }
}

class Car implements Alarm {
  alert(): void {
      console.log('Car alert')
  }
}

// 一个类还可以实现多个接口
interface Light {
  lightOn(): void;
  lightOff(): void;
}
class Vehicle implements Alarm, Light {
  alert(): void {
      console.log('Vehicle alert')
  }
  lightOn(): void {
   console.log('车灯开')   
  }
  lightOff(): void {
      console.log('车灯关')
  }
}
// Vehicle 实现了 Alarm、Light接口，既能报警又可以开关灯



//接口还可以继承接口，接口可以继承接口
interface LightableAlarm extends Alarm {
  sayHi(): void;
  sayNo(): void;
}

let kf: LightableAlarm = {
  sayHi():void {

  },
  sayNo():void {

  },
  alert(): void {
      
  }
}

// 接口继承类

// 常见的面向对象的语言中，接口是不能继承类的，但是在ts中是可以的

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}
// interface PointInstance {
//   x: number
//   y: number
// }
// interface Point3d extends Point   等价于interface Point3d extends PointInstance
interface Point3d extends Point {
  z: number
}
let point3d: Point3d = {x: 1, y: 2, z: 3};
// why?

// 一个类可以当做类来用，也可以当做一个类型来用
// demo： Point 可以当做类来用，也可以当做类型来用

// 当做类来用
let p = new Point(1,2)

// 当做类型来用
function printPoint(p: Point) {
  console.log(p)
} 
printPoint(new Point(1,2)) 


// 内层根因，为什么可以这样？

interface PointInstanceType {
  x: number;
  y: number
}

function printPoint1(p: PointInstanceType) {
  console.log(p)
}
printPoint1(new Point(1,2))
// 上例中我们新声明的 PointInstanceType 类型，与声明 class Point 时创建的 Point 类型是等价的