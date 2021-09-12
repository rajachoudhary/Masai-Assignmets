function runProgram(input) {
    input = input.split("\n");
    var T = Number(input[0]);
    for (x = 1; x <= T; x++) {
        var arr = input[x].split("");
        var N = arr.length;
        var stack = [];
        for (var i = 0; i < N; i++) {
            if (stack[stack.length - 1] + "" + arr[i] == '(' + "" + ')' ||
             stack[stack.length - 1] + "" + arr[i] == '{' + "" + '}' || 
             stack[stack.length - 1] + "" + arr[i] == '[' + "" + ']') {
                stack.pop();
            }
            else {
                stack.push(arr[i]);
            }
        } 
        if (stack.length == 0) {
            console.log("balanced")
        } else {
            console.log("not balanced")
        }
    } 
} runProgram(`3
{([])}
()
([]`)