function navbar(){
    return `
    <div class="container-fluid navbar bg-dark bg-gradient">
        <div class="">
            <input  type="text" id="searchFood"/>
            <button id="search">SEARCH FOOD</button>
        </div>
        <div>
            <button class = "btn btn-outline-primary"><a href = "./foodapi.html">HOME</a></button>
            <button class = "btn btn-outline-primary"><a href="./receipe.html">Recipe of the day</a></button>
            <button class = "btn btn-outline-primary"><a href="./latest.html">Latest Recipe</a></button>
        </div>
        </div>
        <div id="foodContainer" class = "row justify-content-center"></div>
    `
}

export default navbar
