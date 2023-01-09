// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let answer = [];
  const arr = []; // 담을 배열

  // 패턴 -> (0,1), (0,2), (0,3), (0,4)
  // (1,2), (1,3), (1,4), (2,3), (2,4), (3,4) 처럼 진행

  // i는 0 ~ length만큼 반복하고, j는 i+1부터 length - 1의 길이만큼 반복
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length - 1; j++)
      arr.push(numbers[i] + numbers[j + 1]);
  }

  // filter 함수로 중복을 제거한 후,
  answer = arr.filter((num, idx) => {
    return arr.indexOf(num) === idx;
  });
  // 오름차순 정렬
  answer = answer.sort((a, b) => a - b);
  return answer;
}
