let promise = new Promise(executor);

function executor(resolve, reject) {
    setTimeout(function() {
        resolve("promise resolved")
    },1000)
}
// console.log(promise)

promise.then(function(response) {
    console.log(promise)
    // console.log(response)
})
// console.log(promise)