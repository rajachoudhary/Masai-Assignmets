 var arr = []

 
let btn = document.getElementById("submit")

function handleAdd(e){
    e.preventDefault()
    let userName = document.getElementById("name").value
    let urls = document.getElementById("url").value
    let prices = document.getElementById("price").value
    
   
    let details = {
        name : userName,
        url : urls,
        price : prices    
    } 

    arr.push(details)
    localStorage.setItem('list',JSON.stringify(arr))
    // console.log(list)
    const div = document.getElementById("lists")
    
    display(arr,div)
    
}
  

function display(list, div){
   
    const  divContent = document.createElement('div')
    divContent.innerHTML = ""
    let divs ;
   
    for(let i = 0; i < list.length; i++){
        
        divs = document.createElement('div')
        let h4 = document.createElement('h4')
        h4.textContent = list[i].name
        
        var img = document.createElement('img')
        img.src = `${list[i].url}`
        
        let h5 = document.createElement('h5')
        h5.textContent =  (`Price : ${list[i].price}`)

        divs.appendChild(h4)
        divs.appendChild(img)
        divs.appendChild(h5)    
    }
    
    let btns = document.createElement('button')
    btns.textContent = "Add To Cart"
    divs.appendChild(btns)

    divContent.appendChild(divs)
    div.appendChild(divs)
    btns.setAttribute("class","btn btn-success")
    
    
}   
  
var arr1= []
function handleLoad(){
    let onScreen = JSON.parse( localStorage.getItem("list"))
    
    if(onScreen){

        arr = onScreen
        let mainDiv ;

        for(let i = 0; i < onScreen.length; i++){

            const div = document.getElementById("lists")
            let data = onScreen[i]
            mainDiv = document.createElement('div')

            let h4 = document.createElement("h4")
            h4.textContent = data.name
            mainDiv.appendChild(h4)
            
            let img = document.createElement("img")
            img.src = data.url
            mainDiv.appendChild(img)
            
            let h51 = document.createElement("h5")
            h51.textContent = "Price :"+" "+ data.price
            mainDiv.appendChild(h51)

            let btns = document.createElement('button')
            btns.textContent = "ADD TO CART"
            mainDiv.appendChild(btns)
            btns.setAttribute("class","btn btn-success")

            div.appendChild(mainDiv)

       

            btns.addEventListener("click", function(event){
                var target = event.currentTarget;
                arr1.push(onScreen[i])
               
                localStorage.setItem("inCart",JSON.stringify(arr1))
            })
            
        }  
        
       
            
    }

    
    // console.log(arr)
}





window.addEventListener("load", function(){
    
    btn.addEventListener("click", handleAdd)
   
    handleLoad()
})


        
        