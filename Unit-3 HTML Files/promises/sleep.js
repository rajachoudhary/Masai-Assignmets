function sleep(delay) {
    return new Promise(function(resolve, reject) {
        if(typeof delay !== 'number') {

            reject("Please pass a number to sleep")
        }
        setTimeout(function() {
            resolve("success")
        },delay)
    })
    
}

sleep("m")
.then(function() {
    console.log("slept for 3000ms")
})
.catch(function(err) {
    console.log(err)
})