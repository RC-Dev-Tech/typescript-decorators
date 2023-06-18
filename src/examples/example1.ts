/*
在這個例子中，log 裝飾器被應用於類別本身。
當類別被定義時，裝飾器會在類定義後立即執行，並輸出 "Class decorated" 訊息。

注意，如果你在類上應用多個裝飾器，它們會按照從上到下的順序執行。
也就是說，最上面的裝飾器會最先執行。

裝飾器應用於類別時，它們可以用於修改類別的行為，添加額外的屬性或方法，或者進行其他類似的操作。
*/

import { IExample } from "../core/base";
export namespace Example1 {
  export function log(target: any) {
    console.log('Class decorated:', target);
  }

  @log
  export class Example extends IExample {
      constructor(private name: string) {
        super();
      }
      
      sayHello() {
        console.log(`Hello, ${this.name}!`);
      }
  
      run(): void {
        this.sayHello(); // Output: Hello, John!
      }
  }
}



