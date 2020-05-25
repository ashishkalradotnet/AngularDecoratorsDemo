import { logMethod, readOnly } from "../utils/decorators";
import { read } from 'fs';

export class Planet {
  constructor(public name: string) {}

  @logMethod
  @readOnly
  greet(greeting: string, isLoad: boolean = false) {
    const phrase = `${greeting} ${this.name}!`;
    console.log(isLoad ? phrase.toUpperCase() : phrase);
  }
}
