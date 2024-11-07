
type Rectangle={
    shape:"rectangle",
    height:number,
    width:number
}
type Circle={
    shape:"circle",
    radius:number
}

type CircleOrRectangle = Rectangle | Circle;
function calculateShapeArea(shape:CircleOrRectangle):number{
    if(shape.shape==="circle"){
        let r=shape.radius;
        return Math.PI*r*r;
    }else if(shape.shape==="rectangle"){
        return shape.width*shape.height;
    }
    
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
console.log(circleArea);
console.log  (rectangleArea);