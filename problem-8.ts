

function validateKeys<T extends object>(obj:T,keys:(keyof T)[]):boolean{
    
    for(let key of keys){
        if(!(key in obj)){
            return false;
        }
    }
    return true;
}
const person1 = {name: "Alice", age: 25};
console.log(validateKeys(person1, ["name", "age"])); console.log(validateKeys(person1, ["name", "address"]))