// https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 내가 제출한 풀이
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++)
        console.log(number[i] + number[j] + number[k]);
      if (number[i] + number[j] + number[k] === 0) sum += 1;
    }
  }
  return sum;
}
