function solution(my_string, letter) {
  let arr = my_string.split("");
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === letter) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }
  let arr2 = `${answer.join("")}`;

  return arr2;
}
