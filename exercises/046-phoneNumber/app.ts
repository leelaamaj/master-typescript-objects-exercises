class PhoneNumberFormatter {
 numbers:number[];
 constructor(numbers:number[]){this.numbers=numbers;}
 render():string{return this.parenthesize(this.getAreaCode())+" "+this.getExchangeCode()+"-"+this.getLineNumber();}
 getAreaCode():string{return this.slice(0,3);}
 getExchangeCode():string{return this.slice(3,6);}
 getLineNumber():string{return this.slice(6,10);}
 parenthesize(string:string):string{return "("+string+")";}
 slice(start:number,end:number):string{return this.numbers.slice(start,end).join("");}
}
export {};
