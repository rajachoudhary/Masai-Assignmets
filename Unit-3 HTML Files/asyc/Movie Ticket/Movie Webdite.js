

var container = document.getElementById("container")

let arr = ["https://www.filmibeat.com/imgm/416x335x100/2019/03/the-curse-of-la-llorona_155316627520.jpg","https://www.filmibeat.com/imgm/416x335x100/2017/02/kong-skull-island_1488280025250.jpg"]
for (var i = 0; i <arr.length; i++){

        var img = document.createElement("img")
        img.src = arr[i]
    }
    setInterval(function() {
        container.appendChild(img)
    },2000)