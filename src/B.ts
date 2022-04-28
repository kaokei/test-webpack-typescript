import { Injectable, Inject, forwardRef } from "@kaokei/di";
import { A } from "./A";

@Injectable()
export class B {
  @Inject(forwardRef(() => A))
  public a!: A;

  public logB<T>(msg: T) {
    console.log("from logB => ", msg);
  }
}
