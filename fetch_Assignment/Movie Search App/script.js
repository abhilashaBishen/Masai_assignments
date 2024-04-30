const baseUrl = 'https://www.omdbapi.com';
const key = '5c702ee9';

const moviesContainer = document.querySelector('.movie-container');

const searchbox = document.getElementById("search-box");

const searchbutton = document.getElementById("search-button");

searchbutton.addEventListener('click', getmoviename);

function getmoviename() {
    let data = searchbox.value;
    console.log(data);

    displaydata(data);
}

function displaydata(data) {
    moviesContainer.innerHTML = '';
    const api_data = fetch(`${baseUrl}/?s=${data}&apikey=${key}`);
    console.log(api_data);

    api_data.then((res) => res.json())
        .then((data) => {
            console.log(data.Search);
            let arrayOf_data = data.Search;
            console.log(arrayOf_data)
            arrayOf_data.forEach(movie => {
                let movieCard = document.createElement('div');
                movieCard.classList.add('movie-card');

                let cardHTML = `<img src="${movie.Poster}" alt="poster"> 
<h3 class="card.title">Movie${movie.Title}</h3></p>
<p><b>Type:</b>${movie.Type}</p>
<p><b>Release Year: </b>${movie.Year} 
</p><p><b>imdbID: </b>${movie.imdbID} </p>`

                movieCard.innerHTML = cardHTML;

                moviesContainer.append(movieCard);

            });
        })
}