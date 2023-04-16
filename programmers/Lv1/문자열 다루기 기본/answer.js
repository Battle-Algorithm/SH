function solution(s) {
    if(s.length !== 4 && s.length !== 6 
         || s.toLowerCase().indexOf("e") !== -1) {
        return false;
    }
    
    return !isNaN(Number(s));
}
