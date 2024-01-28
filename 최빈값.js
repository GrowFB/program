function solution(array) {
  let arr = new Array(Math.max(...array) + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    arr[array[i]] += 1;
  }

  if (arr.indexOf(Math.max(...arr)) !== arr.lastIndexOf(Math.max(...arr))) {
    return -1;
  } else {
    return arr.indexOf(Math.max(...arr));
  }
}
