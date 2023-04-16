function compareFunction(a, b, n) {
    if(a[n] == b[n]) {
        return a > b ? 1: -1
    }
    
    return a[n] > b[n] ? 2 : -1
}

function solution(strings, n) {
    return strings.sort((a,b) => compareFunction(a,b,n));
}
