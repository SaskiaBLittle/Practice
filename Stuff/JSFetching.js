const myMovieData = {
    id: 1,
    title: "Rear Window",
    director: "Alfred Hitchcock",
    year: 1954,
    genre: [
        "Mystery", 
        "Thriller"
    ],
    rating: 10,
    starring: [
        "James Stewart", 
        "Grace Kelly"
    ]
};

/* 
    This function will get the movies data and wait until all is collected.
    It will then display once data is ready by using the other written methods.
*/
async function getMovies() {
    const res = await fetch("https://web1-z04e.onrender.com/movies");
    const fetchedMovies = await res.json();
    //If below is displayMovies it will call the method and write to screen, or you can write console.log for it to go into the inspect
    displayMovies(fetchedMovies);
}

getMovies(); //Have to call method to make it work

//This is where parts get written into the HTML and is displayed to the screen
function displayMovies(moviesData) {
    for (movie of moviesData) {
        const movieCard = document.createElement("div");

        //writing HTML instead of Text allows the <h2> to work as a method rather then as part of the text written to screen
        movieCard.innerHTML = `
                <h2>Title: ${movie.title}</h2>
                <p class="movie-date">Date: ${movie.year}</p>
                <p>Director: <strong>${movie.director}</strong></p>
                <p>Rating: <em>${movie.rating}</em></p>
            `;
        webpage.appendChild(movieCard);
    }
}

const webpage = document.querySelector("body");

const actorList = document.createElement("ul"); //Creates the list to hold the actors
for (const actor of myMovieData.starring) {
    const actorItem = document.createElement("li");
    actorItem.innerText = actor;
    actorList.appendChild(actorItem);
}

// movieCard.appendChild(actorList);