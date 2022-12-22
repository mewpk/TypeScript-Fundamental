type Person = {
    name : string,
    age : number
    phone ?: string
    readonly status : string
}
const Jack : Person = {name : "Jackky"  , age : 20 , status : "ok"};
const Chom : Person = {name : "Jackky"  , age : 20 , phone : "093-211-3221" , status : "ok" };
console.log(Jack)