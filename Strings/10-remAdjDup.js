function remAdjDup(str){
    const stack = [];
    for (let i=0; i<str.length; i++){
        if(stack.length && stack[stack.length - 1] === str[i]){
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }

    return stack.join('');
}

console.log(remAdjDup("abbacd"));