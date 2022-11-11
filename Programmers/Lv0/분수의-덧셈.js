// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(denum1, num1, denum2, num2) {
  let topNum = num1 * denum2 + num2 * denum1;
  let botNum = num1 * num2;
  let divide = 1;
  for (let i = 1; i <= topNum; i++) {
    if (topNum % i === 0 && botNum % i === 0) {
      divide = i;
    }
  }
  return [topNum / divide, botNum / divide];
}
