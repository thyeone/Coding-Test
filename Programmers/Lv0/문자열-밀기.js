// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A, B) {
  const arr = [...A]; // [ 'h', 'e', 'l', 'l', 'o' ]

  // 배열 요소 길이만큼 반복
  for (let i = 0; i < arr.length; i++) {
    // A === B가 같으면 0
    if (A === B) {
      return i;
    }
    // arr의 마지막 요소를 배열 맨 앞에 추가
    // arr을 ""으로 이어서 B와 같다면 i+1 반환
    else {
      arr.unshift(arr.pop());
      if (arr.join("") === B) {
        return i + 1;
      }
    }
  }
  return -1; // 될 수 없으면 -1 반환
}
