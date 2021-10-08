let arr = [
  "https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/5/1/original/3_Idiots.PNG",
  "https://wallpaperaccess.com/full/1923020.jpg",
  "https://sofy.tv/blog/wp-content/uploads/2017/12/upcoming-hollywood-movies-you-shouldnt-miss-1400x653-1505901970_1100x513.jpg",
  "https://media.easemytrip.com/media/Blog/India/636929292840157797/636929292840157797k5vsjs.png",
  "https://img.mensxp.com/media/content/2019/Aug/before-amp-after-hollywood-movie-scenes-with-special-effects-that-show-the-power-of-cgi-1400x653-1566306171.jpg",
  "https://www.bollywoodhungama.com/wp-content/uploads/2020/04/Hollywood-movies-have-amassed-only-Rs.-50-crores-at-the-India-box-office-in-the-first-quarter-of-2020.jpg",
  "https://i.pinimg.com/550x/3a/6a/2b/3a6a2bd9a83283cd6ef230ab6a1df4dc.jpg",
];


let movieList = [
  {
    Title: "Mission: Impossible",
    Released: "22 May 1996",
    Imdb: 8.4,
    url: "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg",
  },
  {
    Title: "War",
    Released: "24 Aug 2007",
    Imdb: 8.2,
    url: "https://m.media-amazon.com/images/M/MV5BNTIwMjE2Mjc1MF5BMl5BanBnXkFtZTYwNzI0OTI3._V1_SX300.jpg",
  },
  {
    Title: "There Will Be Blood",
    Released: "25 Jan 2008",
    Imdb: 7.4,
    url: "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg",
  },
  {
    Title: "Ring",
    Released: "11 Aug 1995",
    Imdb: 9,
    url: "https://m.media-amazon.com/images/M/MV5BMDEzNTk5ZDQtMzBjNS00ZmIzLWFjZTktNWE4YzE5NzNiZmQ0XkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Conjuring",
    Released: "19 Jul 2013",
    Imdb: 8.2,
    url: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Ghost",
    Released: "13 Jul 1990",
    Imdb: 7.2,
    url: "https://m.media-amazon.com/images/M/MV5BMmE4ZjI3YzctNjM0YS00MjBlLWFmYjItNDRiNTk0ZmRkYjVjXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg",
  },
  {
    Title: "Hell",
    Released: "10 Jul 2012",
    Imdb: 7.1,
    url: "https://m.media-amazon.com/images/M/MV5BMTgxMDA3OTUwNF5BMl5BanBnXkFtZTgwNTEzMTg5MDE@._V1_SX300.jpg",
  },
  {
    Title: "Current",
    Released: "19 Jun 2009",
    Imdb: 7.5,
    url: "https://m.media-amazon.com/images/M/MV5BYTc4OGFlNWItYWRjMS00Mjg2LTg1NzItMWM1ZDdmMDMzYmRjXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg",
  },
  {
    Title: "Anaconda",
    Released: "11 Apr 1997",
    Imdb: 9.5,
    url: "https://m.media-amazon.com/images/M/MV5BZDc4ODcyNWMtMzI2Zi00YzcwLWE4ZTUtYWM3OWI1MTgwYTc1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
  },
];


function showMovie(movieList) {
  const movieContainer = document.getElementById("movieContainer");
  console.log(movieList)
  let div;

  movieList.map((element) => {
    div = document.createElement("div");

    var h1 = document.createElement("h1");
    h1.textContent = element.Title;
    h1.className = "text-center";
    
    const img = document.createElement("img");
    img.src = element.url;
    img.className = "justify-content-center";

    const h4 = document.createElement("h4");
    h4.textContent = "Release Date :" + " " + element.Released;
    h4.className = "text-center mt-2";

    const imdbH4 = document.createElement("h4");
    imdbH4.textContent = "Imdb :" + " " + element.Imdb;
    imdbH4.className = "text-center";

    div.append(h1, img, h4, imdbH4);
    movieContainer.appendChild(div);
    div.className = "p-4 border border-light";
    // movieContainer.innerHTML = ""
  });
}


var i = 0;
var container = document.getElementById("container");
var img = document.createElement("img");

function imageChange() {
  img.src = arr[i];
  if (i < arr.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(imageChange, 2000);
}
container.appendChild(img);

window.addEventListener("load", function () {
  imageChange();
  showMovie(movieList);
  
  // sortLowToHigh(lowArr)
  const lowToHigh = document.getElementById("lowToHigh")
  lowToHigh.addEventListener("click",function(){
    let highToLow = document.getElementById("highToLow")
    let lowArr = []
    for (let i=0; i<movieList.length; i++){
      lowArr.push(movieList[i])
    }
    // console.log(lowArr)
    
    function low(lowArr) {
      for(var i=0; i<lowArr.length; i++){
    
        for(var j=0; j<lowArr.length-i-1; j++){
    
          if(lowArr[j].Imdb > lowArr[j+1].Imdb){
              temp = lowArr[j]
              lowArr[j] = lowArr[j+1]
              lowArr[j+1] = temp
          }
        }
      }
    }
    low(lowArr);
    function sortLowToHigh(lowArr) {
      const movieContainer = document.getElementById("movieContainer");
      movieContainer.innerHTML=""
      const sortingLowToHigh = document.getElementById("sortingLowToHigh");
      
      let div;
    
      for(let i=0; i<lowArr.length; i++){
        // console.log(lowArr[i][i].Title)
        div = document.createElement("div");
    
        var h1 = document.createElement("h1");
        h1.textContent = lowArr[i].Title;
        h1.className = "text-center";
        
        const img = document.createElement("img");
        img.src = lowArr[i].url;
        img.className = "justify-content-center";
    
        const h4 = document.createElement("h4");
        h4.textContent = "Release Date :" + " " +lowArr[i].Released;
        h4.className = "text-center mt-2";
    
        const imdbH4 = document.createElement("h4");
        imdbH4.textContent = "Imdb :" + " " + lowArr[i].Imdb;
        imdbH4.className = "text-center";
    
        div.append(h1, img, h4, imdbH4);
        sortingLowToHigh.appendChild(div);
        div.className = "p-4 border border-light";
      };
    }
    sortLowToHigh(lowArr)
  })
});
