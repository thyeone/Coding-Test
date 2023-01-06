function solution(storey) {
  let answer = 0;
  storey = String(storey); // 문자열로 변환해,
  const arrStorey = Array.from(storey); // 배열에 담는다.

  // 뒷자리부터 for문 반복
  for (let i = arrStorey.length - 1; i >= 0; i--) {
    const num = Number(arrStorey[i]); // string -> Number Type 변환

    // 1) 숫자가 5라면
    if (num === 5) {
      if (arrStorey[i - 1] < 5) {
        // 1-1) 다음 자리 숫자가 5보다 작다면
        answer += num; // 현재 자리 숫자만큼 answer에 더한다.
      }
      // 1-2) 그게 아닐 경우 answer에 현재 자리 숫자를 더하되, 다음 자리 숫자를 +1함.
      else {
        answer += num;
        arrStorey[i - 1]++;
      }
    } else if (i === 0 && num === 5) {
      /*  2) 1번 케이스에 대처하기 위한 if문으로, 
    맨 앞자리 숫자가 5일 경우 answer에 숫자만 담는다. */
      answer += num;
    }
    // 2) 5보다 작으면 그대로 answer에 현재 숫자 담기
    else if (num < 5) {
      answer += num;
    } else if (i === 0 && num > 5) {
      /*  3) 맨 앞자리 숫자인데, 5보다 클 경우 현재 숫자에 +1해서 담는다. 
    예를 들어, 6656이라면 맨 앞자리 숫자 6 -> 10 -> 0 
    마법의 돌 5개 소비이므로 */
      answer += 10 - num + 1;
    } else {
      answer += 10 - num;
      arrStorey[i - 1]++;
    }
  }
  return answer;
}

// 1. 각 자리 수마다 0으로 만든다. (반올림으로)
// 2. 맨 앞자리 숫자만큼 0으로 뺀다.
