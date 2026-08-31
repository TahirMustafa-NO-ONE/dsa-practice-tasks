function rotateArrays(s1, s2){
    if(s1.length !== s2.length) return false;

    const s1s2 = s1 + s1;
    return s1s2.includes(s2);
}

console.log(rotateArrays("abcd", "cdab"));
