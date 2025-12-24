/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    // traverse to the array
    let s = words.length;
    let result = [];
    for(let i = 0; i<s; i++){
        if(words[i].includes(x)){
            result.push(i);
        }
        



        // for(let j =0;i<s[i].length;j++){
        //     if(s[j]===x){
        //        result.push(i);
        //     }
        // }
    }
    return result;
};