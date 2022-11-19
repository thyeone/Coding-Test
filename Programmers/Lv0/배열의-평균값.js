// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  const sum = numbers.reduce((a, b) => a + b);
  const answer = sum / numbers.length;
  return answer;
}
