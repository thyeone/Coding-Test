// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== arr[i + 1] ? answer.push(arr[i]) : null;
  }
  console.log(answer);
  return answer;
}

// const arr = [1,1,3,3,0,1,1] -> 연속되는 숫자 제거

// 1. for(let i = 0; i<arr.length; i++) 문이 실행된다고 할 때,
// 2. arr[0] !== arr[1] 이면 answer.push
// 3. 그게 아니면 null
