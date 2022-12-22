"use strict";
const person1 = {
    name: "mew",
    age: 20
};
const person2 = {
    name: "pk",
    age: 10
};
const getData = (data) => {
    console.log(`Name = ${data.name} Age = ${data.age}`);
};
getData(person1);
getData(person2);
