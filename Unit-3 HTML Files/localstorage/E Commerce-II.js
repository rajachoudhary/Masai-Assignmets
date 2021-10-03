    let arr2 = []
        
    var value = JSON.parse( localStorage.getItem("inCart"))
    localStorage.setItem("cartValue",JSON.stringify(arr2))
    console.log(value)
    // arr2.push(cartValue)
    var count = 0
    var totalPrice = 0
    var tPrice = document.getElementById("price")
    var noOfItems = document.getElementById("count")
    function load(){
        
        let mainDivs ;
        for(let i = 0; i < value.length; i++){

            ++count
            noOfItems.textContent = "Total Items" + " " + count

            let container = document.getElementById("container")
            let cartValue = value[i]
            
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

            totalPrice += Number(cartValue.price)
            tPrice.textContent = "Total Price"+" "+totalPrice

            container.appendChild(mainDivs)
            
        }  
             
    }
    

     
    
    window.addEventListener("load", function(){

        load()
        // loading()
    })
    // var count = document.getElementById("count")
    // count.textContent = arr2.length
    
