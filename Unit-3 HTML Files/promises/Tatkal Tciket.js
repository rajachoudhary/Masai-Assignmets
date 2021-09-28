const trainA = ["a","b","c","d","e","f","g","h","i"];
const trainB = ["j","k","l","m","n","o","p","q","r"];
const trainC  = ["s","t","u","v","w","X","Y","z"];

async function checkAvailability(){

    let promise = await new Promise(function(resolve,rej){

        const id = setInterval (function(){
            if(trainA.length < 5){
                resolve (`Train A is available`)
                clearInterval(id)
            }
            else if(trainB.length < 5){
                resolve (`Train b is available`)
                clearInterval(id)
            }
             else if (trainC.length < 5){
                resolve (`Train c is available`)
                clearInterval(id)
            }
        },1000)
        
    })
    return promise;
}

function cancelTicket(){

    let speeds = [
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 8)
    ];

    const ids = ["A","B","C"];
    [trainA, trainB, trainC].forEach(function(train,index){

        let trainA = document.getElementById("trainA")
        let trainB = document.getElementById("trainB")
        let trainC = document.getElementById("trainC")

        if(index === 0){
           trainA.textContent = train.length
        }  
        if (index === 1){
            trainB.textContent= train.length
        }  
        if (index){
            trainC.textContent = train.length
        }
        
        setTimeout (function(){
            train.push(Math.floor(Math.random() * 5))
        },6000)

        setTimeout(function(){
            train.pop();
            visualize(train,ids[index])
            console.log(index)
        },1000*speeds[index])
    })
}

function visualize(train,id){
   
    const qContainer = document.getElementById(id);
    qContainer.innerHTML = ""
    const ul = document.createElement("ul")
    train.forEach(function(name){
        
        const el = document.createElement("li")
        el.textContent = name
        ul.append(el)
    })
    qContainer.appendChild(ul)
}

visualize(trainA,"A")
visualize(trainB,"B")
visualize(trainC,"C")

var id = setInterval(cancelTicket,1000)

checkAvailability()
.then(function(resolve){
    alert(resolve)
    window.location.assign("booking.html")
})
.catch(function(err){
    console.log(err)
})
