const e={backdrop:document.querySelector(".backdrop"),closeBtn:document.querySelector("[data-modal-close]")};function t(){e.backdrop.classList.remove("is-open"),window.removeEventListener("keydown",t)}e.backdrop.addEventListener("click",(function(e){e.target.classList.contains("backdrop")&&t();return})),e.closeBtn.addEventListener("click",t),window.addEventListener("keydown",(function(e){"Escape"===e.code&&t()}));const n="431ab85139813dba3796c445694ce723",r="https://api.themoviedb.org/3";class i{globalFetch(e){return fetch(e).then((e=>e.json())).then((e=>(this.incrementPage(),e.results)))}fetchGenres(){return fetch(`${r}/genre/movie/list?api_key=${n}`).then((e=>e.json())).then((e=>e.genres))}fetchInTrendFilmWithGenres(){return this.fetchTrendFilm().then((e=>this.fetchGenres().then((t=>e.map((e=>({...e,release_date:e.release_date.split("-")[0],genres:e.genre_ids.map((e=>t.filter((t=>t.id===e)))).flat()})))))))}fetchSearchFilmWithGenres(){return this.fetchSearchFilm().then((e=>this.fetchGenres().then((t=>e.map((e=>({...e,release_date:e.release_date.split("-")[0],genres:e.genre_ids.map((e=>t.filter((t=>t.id===e)))).flat()})))))))}fetchTrendFilm(){const e=`${r}/movie/popular?api_key=${n}&language=en-US&page=${this.page}`;return this.globalFetch(e)}fetchSearchFilm(){const e=`${r}/search/movie?api_key=${n}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return this.globalFetch(e)}fetchInfoFilm(){const e=` https://api.themoviedb.org/3/movie/1031653?api_key=${n}&language=en-US`;return this.globalFetch(e)}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get pageNum(){return this.page}set pageNum(e){this.page=e}constructor(){this.searchQuery="",this.page=1}}const a={sliderContainer:document.querySelector(".slide-track")};function s(e){const t=e.map((e=>`\n    <div class="slider-element">\n        <img class="slider-image" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title} "\n            data-id="${e.id}"\n            onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';" />\n    </div>\n    `)).join("");a.sliderContainer.insertAdjacentHTML("beforeend",t)}(new i).fetchTrendFilm().then(s).catch((e=>{a.sliderContainer.innerHTML=`<img class="catch-error-pagination" src="${errorUrl}" />`}));const c={containerList:document.querySelector(".js-card")},o=new i;function h(e){const t=e.map((({poster_path:e,title:t,genres:n,release_date:r,id:i})=>`<li class="card__item">\n  \n        <div class="thumb">\n            <img  src="https://image.tmdb.org/t/p/w500${e}" alt=""width="100%" data-id="${i}"\n         onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';" />\n       \n              \n        </div>  \n             <h2 class="card__title">${t}</h2>\n             <p class="card__text">\n            <span>${n.map((e=>e.name)).join(" ")}</span> | <span>${r}</span>\n            </p>\n    </li>`)).join("");c.containerList.insertAdjacentHTML("beforeend",t)}o.fetchInTrendFilmWithGenres().then(h),console.log(o.fetchInTrendFilmWithGenres());
//# sourceMappingURL=index.c4c0e2f6.js.map
