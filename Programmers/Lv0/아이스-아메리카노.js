// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  let iceAmericano = 5500;
  const share = parseInt(money / iceAmericano);
  const remains = money % iceAmericano;
  return [share, remains];
}
