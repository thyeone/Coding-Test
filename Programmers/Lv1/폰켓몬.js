// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  const set = new Set(nums);

  const setArr = [...set];

  // console.log(Math.ceil(setArr.length / 2));

  function solution(nums) {
    const set = new Set(nums);
  
    const setArr = [...set];
  
    if (nums.length / 2 < setArr.length) {
      return nums.length / 2;
    } else if(nums.length / 2 >= setArr.length) {
      return setArr.length;
    }
  }

// 중복제거 = setArr

// 1. 중복을 없앤다.
// 2. [2, 3]이면 종류 2가지 / [3,1,2,3]이면 종류 4가지.. 근데 결과는 2지..
// (nums.length / 2) < setArr
// 이라면, set / 2 한 다음 소수점 반올림

// [3,3,3,2,2,2] 처럼
// nums.length / 2 > setArr라면 -> 3 > 2
