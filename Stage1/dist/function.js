"use strict";
const sum = (a, b) => {
    return a + b;
};
const funcVoid = (text) => {
    console.log(`Void Function! ${text} `);
};
const funcDef = (text = "no Paramiter") => {
    console.log(`${text}`);
};
function total(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("Not support this type");
}
const add = (...number) => {
    console.log(number);
};
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
funcDef();
funcVoid("hello");
console.log(sum(100, 200));
console.log(total(100, 100));
console.log(total("100", "100"));
