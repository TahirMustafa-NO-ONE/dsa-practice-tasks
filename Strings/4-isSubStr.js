function isSubstring(s, t) {
    let i = 0;
    let j = 0;

    while (j < t.length) {
        if (t[j] === s[i]) {
            i++;

            if (i === s.length) {
                return true;
            }
        } else {
            i = 0;
        }

        j++;
    }

    return false;
}

function isSubstr2(s, t){
    return t.includes(s);
}

console.log(isSubstring("tahir", "my name is tahir mustafa")); // true
console.log(isSubstring("nth", "my name is tahir mustafa"));   // false

console.log(isSubstr2("tahir", "my name is tahir mustafa")); // true
console.log(isSubstr2("nth", "my name is tahir mustafa"));   // false