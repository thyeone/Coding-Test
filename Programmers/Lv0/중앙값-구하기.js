// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  // 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬되기 때문에
  array.sort((a, b) => {
    return a - b;
  });

  return array[Math.floor(array.length / 2)];
}
