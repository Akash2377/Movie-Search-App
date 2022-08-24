var images = [
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4469/674469-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4385/674385-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9939/1279939-h-3be10a34342b",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9308/1269308-h-26da4df3decc",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8722/1078722-h-82919d0d3c64",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7518/1097518-h-1b558692d29f",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5019/675019-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2352/1282352-h-23698d5e8f30",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8679/1028679-h-f9e901f53b9b",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1819/911819-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1511/1161511-h-a103f5d4c916",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6362/936362-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4661/674661-h",
];
var imageMovies = document.createElement("img");
var i = 0;
x = setInterval(function () {
  if (i === images.length) {
    i = 0;
  }
  imageMovies.src = images[i];
  imageMovies.className = "slideshowIMG";
  i++;
}, 2000);
document.getElementById("slideshow").append(imageMovies);

// Search movie by title

function searchMovieByTitle() {
  let movieTitle2 = document.getElementById("movieTitle").value;
  let url = `https://www.omdbapi.com/?apikey=621677b7&t=${movieTitle2}`;
  getMovie();
  async function getMovie() {
    try {
      let res = await fetch(url);
      let myData = await res.json();

      if (myData.Error) {
        alert("Movie not found");
      } else {
        displayData(myData);
      }
    } catch (error) {}
  }
  movieTitle.value = "";
}

// end search by title
// Display searched movie
function displayData(myData) {
  document.getElementById("movieDataA").innerHTML = "";

  let moviedata = `<div>
          <img
            src="${myData.Poster}"
            alt=""
          />
        </div>
        <div>
        <h1 id="paraR">Recommended</h1>
          <h1> <span>${myData.Title}</span></h1>
          <h2>Released Date : <span>${myData.Released}</span></h2>
          <h2>Rating : <span id="ratingID">${myData.imdbRating}</span></h2>
          <h2>Awards : <span>${myData.Awards}</span> </h2>
          <h4>Actors : <span>${myData.Actors}</span></h4>
          <h4>Country: <span>${myData.Country}</span> </h4>
        </div>`;

  let div = document.createElement("div");
  div.innerHTML = moviedata;
  document.getElementById("movieDataA").append(div);
  var rating = document.getElementById("ratingID").innerText;
  if (rating > 8.5) {
    document.getElementById("paraR").style.display = "block";
  }
}
// Display searched movie end
