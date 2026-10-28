"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PhoneNumberFormatter {
    constructor(numbers) { this.numbers = numbers; }
    render() { return this.parenthesize(this.getAreaCode()) + " " + this.getExchangeCode() + "-" + this.getLineNumber(); }
    getAreaCode() { return this.slice(0, 3); }
    getExchangeCode() { return this.slice(3, 6); }
    getLineNumber() { return this.slice(6, 10); }
    parenthesize(string) { return "(" + string + ")"; }
    slice(start, end) { return this.numbers.slice(start, end).join(""); }
}
