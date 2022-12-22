const sum = (a :number, b:number) :number =>{
    return a+b;
}
const funcVoid = (text:string) :void =>{
    console.log(`Void Function! ${text} `)
}
const funcDef =  (text:string = "no Paramiter") : void =>{
    console.log(`${text}`);
}
function total(a:number, b:number) : number
function total(a:string, b:string) : string
function total(a:unknown,b:unknown) : unknown {
    if (typeof a == "number" && typeof b == "number"){
        return a+b
    }
    if (typeof a == "string" && typeof b == "string"){
        return parseInt(a) + parseInt(b)
    }
    throw new Error("Not support this type")
}


const add = (...number : number[]) =>{
    console.log(number)
}

add(1,2,3,4,5,6,7,8,9,10)






funcDef();
funcVoid("hello");
console.log(sum(100,200));
console.log(total(100,100))
console.log(total("100" , "100"))
