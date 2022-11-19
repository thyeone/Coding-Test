// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  const evenLength = num_list.filter((n) => n % 2 === 0).length;
  const oddLength = num_list.filter((n) => n % 2 === 1).length;
  return [evenLength, oddLength];
}
