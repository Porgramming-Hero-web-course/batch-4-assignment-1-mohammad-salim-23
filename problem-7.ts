
class Car{
    make:string;
    model:string;
    year:number;
    constructor(make:string,model:string,year:number){
     this.make = make;
     this.model = model;
     this.year = year;
    }
    //method
    getCarAge(){
        return(`assuming current year is ${this.year}`);
    }
}
const car = new Car("Honda", "Civic", 2030);
console.log(car.getCarAge())