//school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  return (
    "*".repeat(phone_number.length - 4) +
    phone_number.slice(phone_number.length - 4)
  );
}

// phone_number, 전화번호가 주어졌을 때, 뒷 4자리를 제외 *로 변환
// 1. phone_number의 길이의 -4만큼 '*'을 repeat
// 2. 나머지 뒷자리를 붙인다.
