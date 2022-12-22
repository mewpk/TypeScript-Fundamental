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
funcDef();
funcVoid("hello");
console.log(sum(100, 200));
