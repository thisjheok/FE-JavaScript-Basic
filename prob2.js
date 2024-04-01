/* 2번 문제 답안을 작성해주세요. */
function solution(n) {
    let fac = 1;
    for(let i=1;i<=11;i++){
        fac = fac*i;
        if(fac>n){
            return i-1;       
        }
    }
}