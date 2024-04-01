/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
    if(arr.length == 1){
        arr=[-1];
        return arr;
    }
    let min =Infinity;
    let minIndex;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i];
            minIndex = i;
        }
    }
    arr.splice(minIndex,1);
    return arr;
}