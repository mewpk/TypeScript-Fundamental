const sum = (a :number, b:number) :number =>{
    return a+b;
}
const funcVoid = (text:string) :void =>{
    console.log(`Void Function! ${text} `)
}
const funcDef =  (text:string = "no Paramiter") : void =>{
    console.log(`${text}`);
}
funcDef();
funcVoid("hello");
console.log(sum(100,200));
