    let arr2 = []
        
    var value = JSON.parse( localStorage.getItem("inCart"))
    // arr2.push(value)
     
    arr2.push(value)
    console.log(arr2)
    function load(){
        
        let mainDivs ;
        for(let i = 0; i < value.length; i++){
            let container = document.getElementById("container")
            let cartValue = value[i]
            // console.log(value)
            
             mainDivs = document.createElement('div')
           

            let h2 = document.createElement("h4")
            h2.textContent =cartValue.name
            mainDivs.appendChild(h2)
            
            let img1 = document.createElement("img")
            img1.src =cartValue.url
            mainDivs.appendChild(img1)
            
            let h51 = document.createElement("h5")
            h51.textContent = "Price :"+" "+cartValue.price
            mainDivs.appendChild(h51)

            container.appendChild(mainDivs)
            
        }  
             
    }
    
    // function loading(){
    //     let onBrowser = JSON.parse( localStorage.getItem("inCart"))
    //     console.log(onBrowser)
    //     if(onBrowser){
    //         arr2 = onBrowser
    //         let mainDivs ;
    //     for(let i = 0; i < onBrowser.length; i++){
    //         let container = document.getElementById("container")
           
    //          mainDivs = document.createElement('div')
           

    //         let h2 = document.createElement("h4")
    //         h2.textContent =onBrowser[i].name
    //         mainDivs.appendChild(h2)
            
    //         let img1 = document.createElement("img")
    //         img1.src =onBrowser[i].url
    //         mainDivs.appendChild(img1)
            
    //         let h51 = document.createElement("h5")
    //         h51.textContent = "Price :"+" "+onBrowser[i].price
    //         mainDivs.appendChild(h51)

    //         container.appendChild(mainDivs)
            
    //     }  
    //     }
    // }
     
    
    window.addEventListener("load", function(){

        load()
        // loading()
    })
    // var count = document.getElementById("count")
    // count.textContent = arr2.length
    
