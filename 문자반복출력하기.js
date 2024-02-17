function solution(my_string, n) {
  var answer = [];
  let arr = my_string.split("");

  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < n; j++) {
      answer.push(arr[i]);
    }
  }
  let ans = `${answer.join("")}`;
  return ans;
}
