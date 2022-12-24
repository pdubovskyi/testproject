import FilmotekaApi from '../api-service/filmoteka-api';

const refs = {
  sliderContainer: document.querySelector('.slide-track'),
};
const filmotekaApi = new FilmotekaApi();
renderTrendy();

export function renderTrendy() {
  filmotekaApi
    .fetchTrendFilm()
    .then(renderSliderFilms)
    .catch(err => {
      refs.sliderContainer.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
    });
}

function renderSliderFilms(results) {
  const markup = results
    .map(result => {
      return `
    <div class="slider-element">
        <img class="slider-image" src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title} "
            data-id="${result.id}"
            onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';" />
    </div>
    `;
    })
    .join('');
  refs.sliderContainer.insertAdjacentHTML('beforeend', markup);
}
