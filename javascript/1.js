/**
 * @description 100이하의 자연수 A, B, C를 입력받아 세 수중 가장 작은 값을 출력하는 프로그램
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * */
function solution(a, b, c) {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (answer < c) return answer;
  return c;
}

function solution1(a, b, c) {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) answer = c;
  return answer;
}

solution(2, 5, 3);
solution(6, 5, 11);
solution(5, 9, 1);
solution1(1, 9, 3);
solution1(10, 9, 3);
solution1(5, 99, 54);
