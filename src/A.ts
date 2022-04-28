import { Injectable, Inject, forwardRef } from "@kaokei/di";
import { B } from "./B";

@Injectable()
export class A {
  @Inject(forwardRef(() => B))
  public b!: B;

  public logA<T>(msg: T) {
    console.log("from logA => ", msg);
  }
}
