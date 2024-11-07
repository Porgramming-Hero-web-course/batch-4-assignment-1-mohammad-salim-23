
function countWordOccurences(text1:string,text2:string):number{
    const lowertext1 = text1.toLowerCase();
    const lowertext2 = text2.toLowerCase();
    //split the text into words
    const words = lowertext1.split(' ');
    let cnt=0;
    for(let i=0;i<words.length;i++){
        if(words[i]===lowertext2){
            cnt++;
        }
    }
    return cnt;
}
const res3 = countWordOccurences("I love very very","VEry");
console.log(res3);