const data:string [] = []
data.push("Hello")
console.log(data)

const user:number [] = [1,2,3,4,6,8]
console.log(user)

type Employee = {
    name : string,
    salary : number
}
const employee : Employee [] = [];
employee.push({
    name : "jack" , 
    salary : 20000
})

const colors : string[] = ["Red" , "Green" , "Blue"]
const [red , green, blue]  = colors

console.log(red)