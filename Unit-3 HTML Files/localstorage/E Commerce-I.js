 let arr = []


let btn = document.getElementById("submit")

function handleAdd(e){
    e.preventDefault()
    let userName = document.getElementById("name").value
    let urls = document.getElementById("url").value
    let prices = document.getElementById("price").value
    
   
        let details = {
            name : userName,
            url : urls,
            price : prices, 
        } 

    arr.push(details)
    localStorage.setItem('list',JSON.stringify(arr))
    const div = document.getElementById("lists")
    
    display(arr,div)
    // console.log(div)
}
  

function display(list, div){

    const  divContent = document.createElement('div')
    div.innerHTML = ""

    let divs ;
    for(let i = 0; i < list.length; i++){
        
        divs = document.createElement('div')
        let h2 = document.createElement('h2')
        h2.textContent = `${list[i].name}`
        
        var img = document.createElement('img')
        img.src = `${list[i].url}`
        
        let h23 = document.createElement('h2')
        h23.textContent = `${list[i].price}`

       divs.appendChild(h2)
       divs.appendChild(img)
       divs.appendChild(h23)
    }
   divContent.appendChild(divs)
    div.appendChild(divContent)

    // divContent.setAttribute('class',"card")
  
}



window.addEventListener("load",function(){
    let onScreen = JSON.parse( localStorage.getItem("list"))
    //   arr = onScreen  
    const div = document.getElementById("lists")
    if(onScreen){
        arr = onScreen
        const div = document.getElementById("lists")
        display(arr,div)
    }
   

})

window.addEventListener("load", function(){
    
    btn.addEventListener("click", handleAdd)
   
    // handleLoad()
})


        
        
        