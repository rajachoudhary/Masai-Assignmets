    let arr2 = []
        
    var value = JSON.parse( localStorage.getItem("inCart"))
    arr2.push(value)
    localStorage.setItem("cart",JSON.stringify(arr2))
    var value1 = JSON.parse( localStorage.getItem("cart"))
    // console.log(value)
    // console.log(arr2)
    // localStorage.setItem("cartValue",JSON.stringify(arr2))
    // var storeValue = JSON.parse(localStorage.getItem("cartValue"))
    
    var count = 0
    var totalPrice = 0
    var tPrice = document.getElementById("price")
    var noOfItems = document.getElementById("count")
    // function load(){
        
        let mainDivs ;
        for(let i = 0; i <value1.length; i++){

            ++count
            noOfItems.textContent = "Total Items" + " " + count

            let container = document.getElementById("container")
            let cart1 = 1[i]
            
            mainDivs = document.createElement('div')
           
            let h2 = document.createElement("h4")
            h2.textContent =cart1.name
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
             
    // }
    

     
    
    // window.addEventListener("load", function(){

    //     load()
       
    // })
   
    
