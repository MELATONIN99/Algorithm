function solution(answers) {
    
    const NUM1 = [1, 2, 3, 4, 5];
    const NUM2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const NUM3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const scoreBox = [0, 0, 0];
    for (let i = 0; i < answers.length ; i++){ 
    if(answers[i] === NUM1[i % NUM1.length]) {
        scoreBox[0]++;
    }
    if(answers[i] === NUM2[i % NUM2.length]) {
        scoreBox[1]++;
    }
    if(answers[i] === NUM3[i % NUM3.length]) {
        scoreBox[2]++;
    }
    }
    const max = Math.max(...scoreBox);
    const rank = [];
    for(let i = 0; i < scoreBox.length; i++){
        if(max === scoreBox[i]){
            rank.push(i+1);
        }
    }
    var answer = rank;
 
    return answer;
}