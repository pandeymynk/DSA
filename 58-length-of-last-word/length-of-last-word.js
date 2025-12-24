/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // gO TO END 

    let n = s.length-1; // start from last
    let count=0;
    while(n>=0){
       if(s[n] != " "){
        count++;
       }
       else if(count>0){
        break;
       }
       n--;
    }


   

    return count;
};