function lengthOflongestSubStr(str){
    const lastSeen = new Map();
    let start = 0;
    let maxLen = 0;

    for (let end = 0; end < str.length; end++){
        const c = str[end];

        if(lastSeen.has(c) && lastSeen.get(c)>=start){
            start = lastSeen.get(c)+1
        }

        lastSeen.set(c, end);
        maxLen = Math.max(maxLen, end-start+1);
    }

    return maxLen;

}

console.log(lengthOflongestSubStr("geeksforgeeks"));