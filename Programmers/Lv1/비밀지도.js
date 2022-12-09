// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  let answer = []; // 최종 정답 배열
  for (let i = 0; i < n; i++) {
    let bit = (arr1[i] | arr2[i]).toString(2); // bitwise OR (|)
    let map = []; // " "과 # push하는 배열
    // " #####" 은 011111 = 11111이므로 bit.length으로 계산
    for (let j = bit.length - n; j < bit.length; j++) {
      bit[j] == 1 ? map.push("#") : map.push(" ");
    }
    answer.push(map.join("")); // join으로 요소 연결
  }
  return answer;
}

// 1. n = 배열 길이, arr1 = 배열1, arr2 = 배열2
// 2. 배열의 각 수(for문)를 이진수로 변환 -> 비트연산자 OR
// 3. 0을 " ", 1을 #으로 변경 -> bitWise[i] === '1' -> #
