// https://school.programmers.co.kr/learn/courses/30/lessons/42748
f;
function solution(array, commands) {
  const answer = [];
  commands.map(([i, j, k]) => {
    const result = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    answer.push(result);
  });
  return answer;
}
