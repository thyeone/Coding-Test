// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  const before = []; // 문자열을 담을 배열
  const after = []; // 숫자를 담을 배열

  for (i = 0; i < s.length; i++) {
    // before에 문자열이 없다면
    if (!before.includes(s[i])) {
      after.push(-1); // -1 을 after에 담는다.
      before.push(s[i]); // 그리고 before에 문자열을 담는다
      continue; // 루프문 반복
    }
    // before에 문자열이 있다면
    if (before.includes(s[i])) {
      // after에 길이 - 마지막 문자열을 빼서 after에 담는다.
      after.push(before.length - before.lastIndexOf(s[i]));
      before.push(s[i]); // before에 문자열 push
      continue;
    }
  }
  return after;
}
