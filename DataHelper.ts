// DataHelper类   -   负责localStorage操作

class DataHelper {
    dataKey: string;
    primaryKey: string;

    // 构造函数，为对象添加各种属性 
    constructor(dataKey: string, primaryKey:string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    // 将读取的json数组字符串，转成数组对象
    readData():any {
        // 读取 本地数据(根据dataKey读取)
        let strData:string | null = localStorage.getItem(this.dataKey);
        // 将读取的json字符串转换为数组对象
        let arrData:any = [];
        if(strData != null) {
            arrData = JSON.parse(strData)
        }
        return arrData
    }

    // 保存数据
    savaData(arrData: Array<Object>): void {
        // 将数组转成json字符串
        let str: string = JSON.stringify(arrData)
        // 将字符串保存到本地localStorage
        localStorage.setItem(this.dataKey, str)
    }

    // 新增数据
    addData(conStr:string): number {
        // 1、读取本地现有数据
        let arr: any = this.readData();
        // 2、创建一个评论对象，并设置评论内容属性
        let obj: any = {
            content: conStr
        }
        // 3、自动生成主键值（id值） 
        let newId:number = arr.length > 0 ? arr[arr.length-1][this.primaryKey] + 1 : 1;
        obj[this.primaryKey] = newId;
        
        arr.push(obj)
        this.savaData(arr)
        return newId
    }

    // 删除数据
    removeDataById(id:string | number): boolean {
        // 读取本地数组
        let arr = this.readData()
        // 查找要删除评论对象的下标，并保存到本地
        let index = arr.findIndex((ele:any) => {
            return ele[this.primaryKey] == id
        })
         if(index > -1) {
             arr.splice(index,1)
             this.savaData(arr)
             return true
         }
        return false
    }
}