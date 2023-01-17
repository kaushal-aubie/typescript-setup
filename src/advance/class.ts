/** Class */
class Hello {
    a!: string;
  
    constructor(value: string) {
      this.a = value;
    }
  
    get value(): string {
      return this.a;
    }
  }
  