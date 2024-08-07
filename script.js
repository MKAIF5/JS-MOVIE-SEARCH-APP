const movieNameRef = document.querySelector("#movie-name");
const searchButton = document.querySelector("#search-btn");
const result = document.querySelector("#result");

// Function to fetch data from the API
const getMovie = () => {
    searchButton.innerText = "loading..."
    const movieName = movieNameRef.value;
    let API_KEY = '7cecda3';
    let url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${API_KEY}`;

    // If input field is empty
    if (movieName.length === 0) {
        result.innerHTML = `<h3 class="msg">Enter a Movie Name</h3>`;
    }

    else {
        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                console.log(data);
                if(data.Response){

                    result.innerHTML = `
                    <div class="info">
                    <img class="poster" src="${data.Poster}" alt=""> </img>
                    <div> 
                    <h2> ${data.Title} </h2>
                    <div class="rating">
                    <img src="pngwing.com (5).png" alt=""> </img>
                    <h4> ${data.imdbRating} </h4>
                    </div>
                    <div class="details">
                    <span>${data.Rated}</span>
                    <span>${data.Year}</span>
                    <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                    <div>${data.Genre.split(",").join("</div> <div>")}</div>
                    </div>
                    </div>
                    </div> 
                    
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <P>${data.Actors}</P>
                    `
                    searchButton.innerText = "Search"
                }

                else[
                    result.innerHTML = `<h3 class="msg">${data.Error}</h3>`
                ]
                })
                .catch(() =>{
                    result.innerHTML = `<h3 class="msg">Error Occured</h3>`
                    searchButton.innerText = "Search"
                })
                
            }

};

searchButton.addEventListener("click", getMovie)