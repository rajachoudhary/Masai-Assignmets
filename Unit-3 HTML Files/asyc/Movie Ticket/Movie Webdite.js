


let arr = ["https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/5/1/original/3_Idiots.PNG"
            ,"https://wallpaperaccess.com/full/1923020.jpg"
            ,"https://sofy.tv/blog/wp-content/uploads/2017/12/upcoming-hollywood-movies-you-shouldnt-miss-1400x653-1505901970_1100x513.jpg"
            ,"https://media.easemytrip.com/media/Blog/India/636929292840157797/636929292840157797k5vsjs.png"
            ,"https://img.mensxp.com/media/content/2019/Aug/before-amp-after-hollywood-movie-scenes-with-special-effects-that-show-the-power-of-cgi-1400x653-1566306171.jpg"
            ,"https://www.bollywoodhungama.com/wp-content/uploads/2020/04/Hollywood-movies-have-amassed-only-Rs.-50-crores-at-the-India-box-office-in-the-first-quarter-of-2020.jpg"
            ,"https://i.pinimg.com/550x/3a/6a/2b/3a6a2bd9a83283cd6ef230ab6a1df4dc.jpg"]
var i = 0 

var container = document.getElementById("container")

var img = document.createElement("img")
// img.className = "img"
function imageChnage(){
    img.src = arr[i]
    if(i<arr.length-1){
        i++
    } else{
        i=0
    }
    setTimeout(imageChnage,2000)
}
container.appendChild(img)

window.addEventListener("load", imageChnage)





