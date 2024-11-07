function getProperty<T,key extends keyof T>(obj:T,key:key):T[key]{
    return obj[key];
}
const person = { name: "Bob", age: 30 };

 console.log(getProperty(person,"name"))