// https://school.programmers.co.kr/learn/courses/30/lessons/120913?language=javascript

function solution(my_str, n) {
  var answer = [];
  // my_str.length = 배열에 들어갈 요소 갯수
  for (let i = 0; i < my_str.length / n; i++) {
    answer.push(my_str.slice(n * i, n * i + n));
  }
  return answer;
}

// my_str = "abc1Addfggg4556b" 이고 n이 6이라면
// ["abc1Ad", "dfggg4", "556b"] 처럼 담김.
// 각각의 인덱스는 (0, 6), (6, 12), (12, 18)로 잘림
// (n * 0, n), (n * 1, n * 2), (n * 2, n * 3) ...의 패턴으로 잘림
// n * 1, n * i + n 의 패턴으로 i만큼 for문 반복
