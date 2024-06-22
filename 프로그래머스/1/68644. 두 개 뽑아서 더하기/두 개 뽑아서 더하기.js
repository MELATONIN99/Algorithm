function solution(numbers) {
    const box = [];
    const arr = numbers.sort(function (a, b) {
        return a - b;
    });
    // console.log(arr);              
    
    for (let i = 0; i < arr.length; i++){
            for(let j = i+1; j < arr.length; j++){
                const num = arr[i] + arr[j];
                box.push(num);
            }
    }
        
    const set = [...new Set(box)];
    const newSet = set.sort(function (a, b) {
        return a - b;
    });
    var answer = newSet;
    return answer;
}