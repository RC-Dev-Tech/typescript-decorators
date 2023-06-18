import { Config } from "./config";
import { IExample } from "./core/base";
import { Example1 } from "./examples/example1";
import { Example2 }  from "./examples/example2";

export class App {
    protected getExample(): IExample {
      let mode: number = Config.getInstance().getParam ("exsample_mode")
      switch(mode) {
        case 1: return new Example1.Example('ricky');
        case 2: return new Example2.Example();
      }
    }

    public runExample(example: IExample ) {
      if(example === null || undefined) {
        console.log(`run example error!`);
        return;
      }

      example.run();
    }

    run () {
      this.runExample(this.getExample());
    }
}