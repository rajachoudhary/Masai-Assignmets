
        
    var value = JSON.parse( localStorage.getItem("inCart"))
    function handleLoad(){
        if(value) {
        
        
        let mainDiv ;
        let container = document.getElementById("container")
        for(let i = 0; i < value.length; i++){
            // console.log(value[i].price)
            
            mainDiv = document.createElement('div')

            let h4 = document.createElement("h4")
            h4.textContent =value[i].name
            mainDiv.appendChild(h4)
            
            let img = document.createElement("img")
            img.src =value[i].url
            mainDiv.appendChild(img)
            
            let h5 = document.createElement("h5")
            h5.textContent = "Price :"+" "+value[i].price
            mainDiv.appendChild(h5)

            
        }  
        container.appendChild(mainDiv)
             
        }
    
    }
    handleLoad()
    
