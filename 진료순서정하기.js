function solution(emergency) {
  let num = [...emergency].sort((a, b) => b - a);
  var answer = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < emergency.length; j++) {
      if (num[i] == emergency[j]) {
        answer[j] = i + 1;
      }
    }
  }

  return answer;
}
