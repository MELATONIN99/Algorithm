function solution(my_string, overwrite_string, s) {
    let myStringArray = [];
    let overWriteArray = [];
    
    for(let i = 0; i < my_string.length; i++){
        myStringArray.push(my_string[i]);
    }
    for(let i = 0; i < overwrite_string.length; i++){
        myStringArray.splice(s+i,1,overwrite_string[i])
    }
    var answer = myStringArray.join("");
    return answer;
}