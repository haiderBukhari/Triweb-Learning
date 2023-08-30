let check = (s, character_i, character_f) => {
    let initial = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === character_i){
            initial += 1;
        }
        else if(s[i] == character_f){
            if(initial == 0){
                return false;
            }
            initial -= 1;
        }
    }
    return initial === 0? true : false;
}
var isValid = function(s) {
    let value = false;
    if(s.includes('[') || s.includes(']')){
        value = check(s, '[', ']');
        if(!value){return false}
    }
    if(s.includes('(') || s.includes(')')){
        value = check(s, '(', ')');
        if(!value){return false}
    }
    if(s.includes('{') || s.includes('}')){
        value = check(s, '{', '}');
        if(!value){return false}
    }
    return true;
};
console.log(isValid("()"))