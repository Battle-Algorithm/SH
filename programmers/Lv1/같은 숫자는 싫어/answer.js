function solution(arr)
{
    const answer = [];
    let beforeCharacter = null;

    for(let value of arr) {
        if(beforeCharacter !== value) {
            answer.push(value);
        }
        beforeCharacter = value;
    }

    return answer;
}
