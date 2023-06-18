/*
在這個的例子中，log 裝飾器被應用於範例類別的 add 方法上。
當 add 方法被調用時，裝飾器會輸出方法的參數和返回值。

這只是一個簡單的裝飾器示例，裝飾器的用法和應用非常廣泛，
你可以根據具體需求定義自己的裝飾器來擴展和修改類的行為。

*/
import { IExample } from "../core/base";
export namespace Example2 {
  export function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      console.log(`Calling method ${propertyKey} with arguments:`, args);
      const result = originalMethod.apply(this, args);
      console.log(`Method ${propertyKey} returned:`, result);
      return result;
    }
  }

  export class Example extends IExample {
    @log
    add(a: number, b: number) {
      return a + b;
    }
  
    run(): void {
      this.add(2, 3); // Output: Calling method add with arguments: [2, 3]
                      //         Method add returned: 5
    }
  }
}
 