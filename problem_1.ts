

function sumArray(numbers:number[]):number{
    let sum=0;
   for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
   }
  return sum;
}
const res=sumArray([1,4]);
console.log(res);