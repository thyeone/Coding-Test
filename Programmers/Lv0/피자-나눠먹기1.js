// https://school.programmers.co.kr/learn/courses/30/lessons/120814

function solution(n) {
  let pizza = 0;

  n % 7 == 0 ? (pizza = n / 7) : (pizza = Math.ceil(n / 7));

  return pizza;
}
