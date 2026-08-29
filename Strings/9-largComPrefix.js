function largComPrefix(strs){
    if(!strs.length) return "";

    let prefix = strs[0];

    for(let i=1; i<strs.length; i++){
        while(!strs[i].startsWith(prefix)){
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }

    return prefix;
}

console.log(largComPrefix(["flower", "flow", "flight"])); // "fl"
console.log(largComPrefix(["dog", "racecar", "car"]));     // ""
console.log(largComPrefix(["interspecies", "interstellar", "interstate"])); // "inter"