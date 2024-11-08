
interface Profile{
    name:string,
    age:number,
    email:string,
}
function updateProfile(profile:Profile,updates:{name?:string,age?:number,email?:string}):Profile{
    if(updates.name!==undefined){
          profile.name=updates.name;
    }
    if(updates.age!==undefined){
        profile.age=updates.age;
  }
  if(updates.email!==undefined){
    profile.email=updates.email;
}
return profile;
}
const newProfile:Profile={ name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(newProfile,{name:"Bob"}));