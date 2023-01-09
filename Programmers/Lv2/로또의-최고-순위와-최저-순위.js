// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let count = 0; // 0의 개수를 셀 변수

  // lottos와 win_nums의 일치하는 번호의 갯수
  const backNum = lottos.filter((x) => {
    return win_nums.includes(x);
  }).length;

  // lottos를 map함수를 사용하여 0이 있을 때마다 count++
  lottos.map((i) => {
    if (i === 0) {
      count++;
    }
  });
  console.log(backNum);
  // 최저 순위, 최고 순위
  // 정답이 만약 2보다 작다면 6등 return
  const minNum = backNum < 2 ? 6 : 7 - backNum;
  const maxNum = backNum + count < 2 ? 6 : 7 - (backNum + count);

  return [maxNum, minNum];
}

// 1등 : 6, 2등 : 5, 3등 : 4, 4등 : 3, 5등 : 2, 6등 : 그 외

// 1. 0을 제외한 lottos와 win_nums가 일치하는 숫자가 몇개인지 확인
// 2. 일치하는 숫자와 순위를 매칭해 result에 저장
// 3. 0의 숫자를 당첨 숫자로 가정한 후 result에 저장

// 최고 순위 : 7 - (backNum + count)
// 최저 순위 : 7 - backNum
