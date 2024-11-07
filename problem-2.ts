
function removeDuplicates(numbers:number[]):number[]{
   const uniqueArray:number[]=[];
   for(let i=0;i<numbers.length;i++){
    if(uniqueArray.indexOf(numbers[i])===-1){
        uniqueArray.push(numbers[i]);
    }
   }
   return uniqueArray;
}
const res2 = removeDuplicates([10,10,2,2,3,4,4,5]);
console.log(res2);