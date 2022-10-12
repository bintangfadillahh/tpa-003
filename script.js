let row = document.getElementById("item");
let searchItem = document.getElementById("search");

let getMoviesData = async () => {
  let response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=18b7970837f25831fb2aae06149177c7&sort_by=popularity.desc&page=1"
  );
  let movies = await response.json();

  movies.results.forEach((item) => {
    let card = `
        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="card mb-5" style="height: 36rem;">
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" >
                <div class="card-body" style="font-size: 14px">
                    <div class="row">
                        <div class="col-6">
                            <span class="card-title text-primary">
                                ${item.title}
                            </span>
                        </div>
                        <div class="col-6 text-end mb-5">
                            <span class="text-warning">${item.vote_average}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <span style="text-info">${item.release_date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    row.innerHTML += card;
  });
};

let getSearchData = async () => {
  let params = new URL(document.location).searchParams;
  let keyword = params.get("search");
  console.log(keyword);

  let responseSearch = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=18b7970837f25831fb2aae06149177c7&query=${keyword}&sort_by=popularity.desc&page=1`
  );
  let moviesSearch = await responseSearch.json();

  console.log(moviesSearch);
  moviesSearch.results.forEach((item) => {
    let card = `
        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="card mb-5" style="height: 36rem;">
                <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" >
                <div class="card-body" style="font-size: 14px">
                    <div class="row">
                        <div class="col-6">
                            <span class="card-title text-primary">
                                ${item.title}
                            </span>
                        </div>
                        <div class="col-6 text-end mb-5">
                            <span class="text-warning">${item.vote_average}</span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <span style="text-info">${item.release_date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    searchItem.innerHTML += card;
  });
};

getMoviesData();

getSearchData();
