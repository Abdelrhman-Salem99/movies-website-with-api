
export class Movies {
    constructor() {
        ///////  JDOM  ////////


        ///////  Movies Div  JDOM  With jQuery  ////////
        this.moviesShow = $("#moviesShow");
        this.movieDiv = $("#movieDiv");
        this.layer = $("#layer");
        this.getMovie = $("#getMovie");
        this.search = $("#search");
        this.items = $(".nav-cat");



        this.allData = [];   ///////  Array For Movies Api Data ////////

        /////// Function For Calling Finctions  ////////
        this.callingFunctions();

    }

    callingFunctions() {

        this.sendCat();
        this.SearchByWord();
        this.SearchBar();
    }

    /////// Featch Functions  ////////
    async fetchUrl(cat) {
        let apiUrl = "";
        if (cat == "trending") {
            apiUrl = " https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
        }
        else {
            apiUrl = `https://api.themoviedb.org/3/movie/${cat}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3DD0s0h9eFzfMlBuaBwnqhNVVqeeM2WwIK3JZCTOC5Djh9TOF8i55HDQQ`;
        }

        let respones = await fetch(apiUrl);
        this.allData = await respones.json();
        this.showAllMovies();
    }

    async fetchSearch(mov) {
        let apiUrl;
        if (mov == "") {
            apiUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
        }
        else {
            apiUrl = `https://api.themoviedb.org/3/search/movie?query="${mov}"&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false"`;
        }
        let respones = await fetch(apiUrl);
        this.allData = await respones.json();
        this.showAllMovies();
    }
    /////// Featch Functions End  ////////


    /////// Display All Movies Function   ////////
    async showAllMovies() {

        let temp = '';

        for (let i = 0; i < this.allData.results.length; i++) {
            temp += `<div class="col-lg-4 col-md-6  ">
           <div class=" position-relative" id="movieDiv">
               <img src="https://image.tmdb.org/t/p/w500${this.allData.results[i].poster_path}" alt="WW">
               <div class="outterInfo  justify-content-center align-items-center text-center"
               id="layer">
                   <div class="InnerInfo">
                       <h2>${this.allData.results[i].original_title}</h2>
                       <p>${this.allData.results[i].overview}</p>
                       <p>rate :'${this.allData.results[i].vote_average}'</p>
                       <p>${this.allData.results[i].release_date}</p>
                   </div>
               </div>
           </div>

       </div>`;
        }
        this.moviesShow.html(temp);

    }



    ///// Catch & Send Menu Category  ///////
    sendCat() {
        let sendData = "";
        this.items.click((e) => {
            sendData = e.target.getAttribute("value");
            this.fetchUrl(sendData);
        })
        if (sendData == "") {
            this.fetchUrl("now_playing");
        }

    }

    ///// Search By Word ///////

    SearchByWord() {
        this.getMovie.keyup(() => {
            this.getMovie.val();
            this.fetchSearch(this.getMovie.val());
            console.log(this.getMovie.val());
        })
    }


    ///// Search Bar ///////
    SearchBar() {
        let temp = '';
        this.search.keyup(() => {
            let valueOfSearch = this.search.val();
            if(valueOfSearch==""){
                this.showAllMovies()
            }
            else{
                temp = '';
           
                for (let i = 0; i < this.allData.results.length; i++) {     
                    if (this.allData.results[i].original_title.includes(valueOfSearch)) {
                       
                        temp += `<div class="col-lg-4 col-md-6  ">
                           <div class=" position-relative" id="movieDiv">
                               <img src="https://image.tmdb.org/t/p/w500${this.allData.results[i].poster_path}" alt="WW">
                               <div class="outterInfo  justify-content-center align-items-center text-center"
                               id="layer">
                                   <div class="InnerInfo">
                                       <h2>${this.allData.results[i].original_title}</h2>
                                       <p>${this.allData.results[i].overview}</p>
                                       <p>rate :'${this.allData.results[i].vote_average}'</p>
                                       <p>${this.allData.results[i].release_date}</p>
                                   </div>
                               </div>
                           </div>
                
                       </div>`;

                    }
                    
                }
                this.moviesShow.html(temp);
            
            }
          


        })




    }


}
