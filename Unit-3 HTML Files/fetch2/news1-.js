
function fetchData (){
    fetch ("https://newsapi.org/v2/everything?q=india news&from=2021-08-30&sortBy=publishedAt&apiKey=64c316f7a2fa4897858df1e3aee33c73")
    .then(function(response){
    
        // console.log(response)
        return response.json()
    })
    .then(function(response){
        display(response)
        console.log(response.articles)
    })
    .catch(function(error){
        // console.log(error)
    })
}
fetchData()

function display(response){

    const newCard = document.getElementById("newsCard")
    // newCard.innerHTML = ""

    // console.log(response.articles.length)
    for(let i=0 ; i<response.articles.length; i++){
        let div = document.createElement("div")

        let h3 = document.createElement("h3")
        h3.textContent = response.articles[i].title
        h3.className = "card-header"
        let img = document.createElement("img")
        img.src = response.articles[i].urlToImage
        img.className = "newsImg"  

        let p = document.createElement("p")
        p.textContent=response.articles[i].content
        p.className = "mt-2 lead card-footer"
        console.log(response.articles[i].url)
        
        div.appendChild(h3)
        div.appendChild(img)
        div.appendChild(p)
        div.className= "card m-3"
        newCard.appendChild(div)
    }
}
