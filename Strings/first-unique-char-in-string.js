/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freq = new Map();

    for (let i = 0; i<s.length; i++){
        freq.set(s[i], (freq.get(s[i]) || 0)+1);
    }

    for(let j = 0; j<s.length; j++){
        if(freq.get(s[j]) === 1){
            return j;
        }
    }
    return -1;
};
