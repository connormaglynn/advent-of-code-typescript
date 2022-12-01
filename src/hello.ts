export class Hello {
  constructor(public name: string) {}

  public sayHello(): string {
    return `Hello ${this.name}`
  }
}

export const createHello = (name: string): Hello => {
  return new Hello(name)
}
