function firstUnqchr(s){
    const counts = new Map();

    for(const c of s){
        counts.set(c, (counts.get(c) || 0) + 1);
    }

    for(let i=0; i<s.length; i++){
        if(counts.get(s[i]) === 1) return [i, s[i]];
    }

    return -1
}

console.log(firstUnqchr("iamtahir"));