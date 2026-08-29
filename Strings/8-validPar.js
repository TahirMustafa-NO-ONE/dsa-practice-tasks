function validpar(s){
    const stack = [];
    const pairs = { ")":"(", "}":"{", "]":"["};

    for(const c of s){
        if(c === "(" || c === "{" || c === "["){
            stack.push(c);
        } else if (stack.pop() !== pairs[c]){
            return false;
        }
    }

    return true;
}


console.log(validpar("{[{}()]}"));