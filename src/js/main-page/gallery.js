import FilmotekaApi from '../api-service/filmoteka-api';




const refs = {
   containerList: document.querySelector('.js-card'),
}
const filmotekaApi = new FilmotekaApi();
renderHomepage();

export function renderHomepage() {
  filmotekaApi.fetchInTrendFilmWithGenres().then(appendResultsMarkup);
  console.log(filmotekaApi.fetchInTrendFilmWithGenres())
   
}

function appendResultsMarkup(results) {
  
    const markup = results.map(({poster_path, title, genres, release_date, id}) => {
        return `<li class="card__item">
  
        <div class="thumb">
            <img  src="https://image.tmdb.org/t/p/w500${poster_path}" alt=""width="100%" data-id="${id}"
         onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';" />
       
              
        </div>  
             <h2 class="card__title">${title}</h2>
             <p class="card__text">
            <span>${genres.map(obj => obj.name).join(' ')}</span> | <span>${release_date}</span>
            </p>
    </li>`
    }).join('');
    // console.log(markup);
    refs.containerList.insertAdjacentHTML('beforeend', markup);
 
}
