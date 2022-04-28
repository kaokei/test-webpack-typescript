import "reflect-metadata";
import { Injectable, Inject, Injector } from "@kaokei/di";
import { A } from "./A";
import { B } from "./B";

@Injectable()
class MyMath {
  @Inject(A)
  public a!: A;
  @Inject(B)
  public b!: B;

  add(a: number, b: number) {
    const sum = a + b;
    this.a.logA(sum);
    this.b.logB(sum);
    return a + b;
  }
}

const injector = new Injector();

const myMath = injector.get(MyMath);

const sum = myMath.add(1, 2);

console.log("sum => ", sum);
