function swap(str, a, b) {
  var charArr = str.split("");
  var temp = charArr[a];
  charArr[a] = charArr[b];
  charArr[b] = temp;
  return charArr.join("");
}

function fun(str, l, r) {
  if (l == r) {
    console.log(str.split("").join(" "));
  } else {
    for (var i = l; i <= r; i++) {
      str = swap(str, i, l);
      fun(str, l + 1, r);
    }
  }
}

function runProgram(input) {
  input = input.split("\n");
  var n = Number(input[0]);
  var arr = input[1].split(" ").join("");

  fun(arr, 0, n - 1);
}
runProgram(`3
1 2 3`);
