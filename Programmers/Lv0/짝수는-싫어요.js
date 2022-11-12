// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
  let nums = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      return (nums = [...nums, i]);
    }
  }
  return nums;
}
