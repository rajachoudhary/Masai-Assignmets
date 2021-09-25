


let arr = ["https://www.filmibeat.com/imgm/416x335x100/2019/03/the-curse-of-la-llorona_155316627520.jpg","https://www.filmibeat.com/imgm/416x335x100/2017/02/kong-skull-island_1488280025250.jpg"]


var container = document.getElementById("container")

function display(arr) {

    for (var i = 0; i < arr.length; i++){
        var img = document.createElement("img")
        img.src = arr[i]
        console.log(img.src)
        container.appendChild(img)
    }
}
setTimeout("display(arr)",1000)



