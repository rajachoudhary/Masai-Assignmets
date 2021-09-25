function task(delay) {
    return new Promise(function(resolve, reject) {
        if(typeof delay !== 'number') {

            reject("Please pass a number to sleep")
        }
        setTimeout(function() {
            const number = Math.floor(Math.random() * 100)
            resolve(number)
        },delay)
    })
    
}

async function main () {
    
    try{
        const response = await task("2000");
        console.log(response)
    }catch(e){
        console.log("error: " + e)
    }
    try{
        const response = await task(2000);
        console.log(response)
    }catch(e){
        console.log("error: " + e)
    }
    
}

main()