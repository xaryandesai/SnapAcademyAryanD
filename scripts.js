// ============================================================
// BOLLYWOOD MOVIE CATALOG - scripts.js
// All the data lives at the top, all the logic below it.
// ============================================================

// --- MOVIE DATA ---
// Each movie has the same fields so the rest of the code can
// rely on them always being there. Cast is an array of strings;
// poster is a Wikipedia image URL with a placehold.co fallback
// wired up in buildMovieCard via onerror.
const movies = [
  {
    title: "Dilwale Dulhania Le Jayenge",
    year: 1995,
    genre: "Romance",
    director: "Aditya Chopra",
    rating: 9.1,
    language: "Hindi",
    description: "A young man falls in love on a Europe trip and follows his love to win her family's approval before she gets married off.",
    cast: ["Shah Rukh Khan", "Kajol", "Amrish Puri", "Farida Jalal"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/DDLJ_poster.jpg/220px-DDLJ_poster.jpg"
  },
  {
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy",
    director: "Rajkumar Hirani",
    rating: 8.4,
    language: "Hindi",
    description: "Two friends search for their lost college buddy while recalling the crazy and inspiring adventures they had together.",
    cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi", "Kareena Kapoor"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/3_idiots_poster.jpg/220px-3_idiots_poster.jpg"
  },
  {
    title: "Lagaan",
    year: 2001,
    genre: "Drama",
    director: "Ashutosh Gowariker",
    rating: 8.1,
    language: "Hindi",
    description: "Villagers in colonial India challenge British officers to a cricket match to avoid paying an oppressive land tax.",
    cast: ["Aamir Khan", "Gracy Singh", "Rachel Shelley", "Paul Blackthorne"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Lagaan_poster.jpg/220px-Lagaan_poster.jpg"
  },
  {
    title: "Sholay",
    year: 1975,
    genre: "Action",
    director: "Ramesh Sippy",
    rating: 8.2,
    language: "Hindi",
    description: "Two criminals are hired by a retired police officer to capture the ruthless bandit Gabbar Singh terrorizing a village.",
    cast: ["Dharmendra", "Amitabh Bachchan", "Hema Malini", "Amjad Khan", "Jaya Badhuri"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Sholay_poster.jpg/220px-Sholay_poster.jpg"
  },
  {
    title: "Kabhi Khushi Kabhie Gham",
    year: 2001,
    genre: "Drama",
    director: "Karan Johar",
    rating: 7.4,
    language: "Hindi",
    description: "A wealthy patriarch's younger son sets out to London to bring his estranged adopted elder brother back home.",
    cast: ["Amitabh Bachchan", "Jaya Bachchan", "Shah Rukh Khan", "Kajol", "Hrithik Roshan", "Kareena Kapoor"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Kabhi_Khushi_Kabhie_Gham_film_poster.jpg/220px-Kabhi_Khushi_Kabhie_Gham_film_poster.jpg"
  },
  {
    title: "Dil Chahta Hai",
    year: 2001,
    genre: "Comedy",
    director: "Farhan Akhtar",
    rating: 8.1,
    language: "Hindi",
    description: "Three inseparable best friends go their separate ways after college, each finding love and figuring out what matters most.",
    cast: ["Aamir Khan", "Saif Ali Khan", "Akshaye Khanna", "Preity Zinta", "Dimple Kapadia"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Dil_Chahta_Hai_film_poster.jpg/220px-Dil_Chahta_Hai_film_poster.jpg"
  },
  {
    title: "Devdas",
    year: 2002,
    genre: "Drama",
    director: "Sanjay Leela Bhansali",
    rating: 7.2,
    language: "Hindi",
    description: "A heartbroken man turns to alcohol after being separated from his childhood love, spiraling into tragic self-destruction.",
    cast: ["Shah Rukh Khan", "Aishwarya Rai", "Madhuri Dixit", "Jackie Shroff"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Devdas_2002_film_poster.jpg/220px-Devdas_2002_film_poster.jpg"
  },
  {
    title: "Kuch Kuch Hota Hai",
    year: 1998,
    genre: "Romance",
    director: "Karan Johar",
    rating: 7.6,
    language: "Hindi",
    description: "A widowed father reads letters left by his late wife urging him to reconnect with his college best friend — who loved him.",
    cast: ["Shah Rukh Khan", "Kajol", "Rani Mukerji", "Salman Khan"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Kuch_Kuch_Hota_Hai_poster.jpg/220px-Kuch_Kuch_Hota_Hai_poster.jpg"
  },
  {
    title: "Gangs of Wasseypur",
    year: 2012,
    genre: "Action",
    director: "Anurag Kashyap",
    rating: 8.2,
    language: "Hindi",
    description: "A decades-long coal mafia feud erupts through multiple generations in a gritty, violent small-town saga.",
    cast: ["Manoj Bajpayee", "Nawazuddin Siddiqui", "Richa Chadda", "Tigmanshu Dhulia"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Gangs_of_Wasseypur_poster.jpg/220px-Gangs_of_Wasseypur_poster.jpg"
  },
  {
    title: "Andaz Apna Apna",
    year: 1994,
    genre: "Comedy",
    director: "Rajkumar Santoshi",
    rating: 7.8,
    language: "Hindi",
    description: "Two lazy rivals both try to woo a rich heiress, leading to a hilarious series of misadventures and mistaken identities.",
    cast: ["Aamir Khan", "Salman Khan", "Raveena Tandon", "Karisma Kapoor", "Paresh Rawal"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Andaz_Apna_Apna_poster.jpg/220px-Andaz_Apna_Apna_poster.jpg"
  },
  {
    title: "Mughal-E-Azam",
    year: 1960,
    genre: "Drama",
    director: "K. Asif",
    rating: 8.2,
    language: "Hindi/Urdu",
    description: "The Mughal prince Salim falls in love with court dancer Anarkali, defying his emperor father Akbar in a legendary epic.",
    cast: ["Prithviraj Kapoor", "Dilip Kumar", "Madhubala", "Durga Khote"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mughal-e-azam-1960.jpg/220px-Mughal-e-azam-1960.jpg"
  },
  {
    title: "Zindagi Na Milegi Dobara",
    year: 2011,
    genre: "Comedy",
    director: "Zoya Akhtar",
    rating: 8.1,
    language: "Hindi",
    description: "Three childhood friends take a road trip through Spain, confronting their fears and rediscovering what makes life worth living.",
    cast: ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol", "Katrina Kaif", "Kalki Koechlin"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Zindagi_Na_Milegi_Dobara_poster.jpg/220px-Zindagi_Na_Milegi_Dobara_poster.jpg"
  },
  {
    title: "Bajrangi Bhaijaan",
    year: 2015,
    genre: "Drama",
    director: "Kabir Khan",
    rating: 8.0,
    language: "Hindi",
    description: "A devoted man goes on a journey across the India-Pakistan border to return a lost mute girl to her family.",
    cast: ["Salman Khan", "Harshaali Malhotra", "Kareena Kapoor", "Nawazuddin Siddiqui"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Bajrangi_Bhaijaan_poster.jpg/220px-Bajrangi_Bhaijaan_poster.jpg"
  },
  {
    title: "Hum Dil De Chuke Sanam",
    year: 1999,
    genre: "Romance",
    director: "Sanjay Leela Bhansali",
    rating: 7.4,
    language: "Hindi",
    description: "A newly married woman is still in love with someone else, and her husband makes the heart-wrenching decision to reunite them.",
    cast: ["Salman Khan", "Aishwarya Rai", "Ajay Devgn"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Hum_Dil_De_Chuke_Sanam_film_poster.jpg/220px-Hum_Dil_De_Chuke_Sanam_film_poster.jpg"
  },
  {
    title: "PK",
    year: 2014,
    genre: "Comedy",
    director: "Rajkumar Hirani",
    rating: 8.1,
    language: "Hindi",
    description: "An alien stranded on Earth questions organized religion and superstition while searching for his stolen remote control.",
    cast: ["Aamir Khan", "Anushka Sharma", "Sushant Singh Rajput", "Boman Irani"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/PK_poster.jpg/220px-PK_poster.jpg"
  },
  {
    title: "Taare Zameen Par",
    year: 2007,
    genre: "Drama",
    director: "Aamir Khan",
    rating: 8.4,
    language: "Hindi",
    description: "A dyslexic boy struggles at school until an art teacher recognizes his hidden talent and fights to restore his confidence.",
    cast: ["Darsheel Safary", "Aamir Khan", "Tisca Chopra", "Vipin Sharma"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Taare_Zameen_Par.jpg/220px-Taare_Zameen_Par.jpg"
  },
  {
    title: "Dhadak",
    year: 2018,
    genre: "Romance",
    director: "Shashank Khaitan",
    rating: 6.4,
    language: "Hindi",
    description: "Two young people from different castes fall in love, defying their families in a story of passion, sacrifice, and heartbreak.",
    cast: ["Ishaan Khatter", "Janhvi Kapoor", "Ashutosh Rana"],
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Dhadak_film_poster.jpg/220px-Dhadak_film_poster.jpg"
  }
];

// --- STATE ---
// These two variables track what's currently active.
// Any time either one changes I just call renderMovies() to refresh the grid.
let activeGenre = "All";
let searchQuery = "";

// --- DOM REFERENCES ---
// Grab once at startup instead of querying on every render.
const movieGrid    = document.getElementById("movie-grid");
const searchInput  = document.getElementById("search-input");
const resultsCount = document.getElementById("results-count");
const filterButtons = document.querySelectorAll(".filter-btn");

// --- FILTER LOGIC ---
// Returns the subset of movies that match BOTH the genre filter
// and the search text. Either condition alone would also work but
// combining them means the user can search within a genre.
function getFilteredMovies() {
  let filtered = movies;

  // Step 1: genre filter — skip if "All" is selected
  if (activeGenre !== "All") {
    filtered = filtered.filter(function(movie) {
      return movie.genre === activeGenre;
    });
  }

  // Step 2: text search — title only (per project requirement)
  if (searchQuery.trim() !== "") {
    let query = searchQuery.toLowerCase();
    filtered = filtered.filter(function(movie) {
      return movie.title.toLowerCase().includes(query);
    });
  }

  return filtered;
}

// --- BUILD STAR STRING ---
// Extracted into its own helper so card rating display stays consistent.
// Returns a string of 5 filled/empty stars based on a rating out of 10.
function buildStars(rating) {
  let fullStars = Math.floor(rating);
  let stars = "";
  for (let i = 0; i < fullStars; i++) {
    stars += "★";
  }
  for (let i = fullStars; i < 10; i++) {
    stars += "☆";
  }
  // slice to 5 so it fits nicely on each card
  return stars;
}

// --- BUILD A CARD ---
// Returns an HTML string for one movie card.
// The card is poster-first with key details below.
function buildMovieCard(movie) {
  let genreClass = movie.genre.toLowerCase().replace(/\s+/g, "-");
  let stars = buildStars(movie.rating).slice(0, 5);

  // onerror: if the Wikipedia image fails, fall back to a colored placeholder
  // that at least shows the movie title so the card still looks reasonable
  let fallbackSrc = "https://placehold.co/200x300/7a1515/f0c96b?text=" + encodeURIComponent(movie.title);

  return `
    <div class="movie-card">
      <div class="card-poster-wrap">
        <img src="${movie.poster}"
             alt="${movie.title} poster"
             onerror="this.onerror=null; this.src='${fallbackSrc}'" />
        <span class="poster-year">${movie.year}</span>
        <span class="genre-badge genre-${genreClass} poster-genre">${movie.genre}</span>
      </div>
      <div class="card-info">
        <h2 class="movie-title">${movie.title}</h2>
        <p class="card-director">Dir. ${movie.director}</p>
        <p class="card-description">${movie.description}</p>
        <div class="card-bottom">
          <span class="card-stars">${stars}</span>
          <span class="card-rating-num">${movie.rating}/10</span>
        </div>
      </div>
    </div>
  `;
}

// --- RENDER THE GRID ---
// Clears the grid div and refills it based on current filter + search state.
function renderMovies() {
  let filtered = getFilteredMovies();

  resultsCount.textContent = `Showing ${filtered.length} of ${movies.length} films`;
  movieGrid.innerHTML = "";

  if (filtered.length === 0) {
    movieGrid.innerHTML = `
      <div class="no-results">
        <p>No movies found. Try a different search or genre!</p>
      </div>
    `;
    return;
  }

  filtered.forEach(function(movie) {
    movieGrid.innerHTML += buildMovieCard(movie);
  });
}

// --- ADD COUNT BADGES TO FILTER BUTTONS ---
// This runs once at startup and adds a small number badge to each
// genre button showing how many films are in that category.
function setupGenreCounts() {
  filterButtons.forEach(function(btn) {
    let genre = btn.getAttribute("data-genre");
    let count;
    if (genre === "All") {
      count = movies.length;
    } else {
      count = movies.filter(function(m) { return m.genre === genre; }).length;
    }
    // Append the count badge inside the button
    btn.innerHTML = btn.textContent + `<span class="btn-count">${count}</span>`;
  });
}

// --- SET UP FILTER BUTTONS ---
function setupFilterButtons() {
  filterButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      filterButtons.forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      activeGenre = btn.getAttribute("data-genre");
      renderMovies();
    });
  });
}

// --- SET UP SEARCH ---
// "input" fires on every keystroke so the grid updates as you type
function setupSearch() {
  searchInput.addEventListener("input", function() {
    searchQuery = searchInput.value;
    renderMovies();
  });
}

// --- INIT ---
// Set everything up, then do the first render.
setupGenreCounts();
setupFilterButtons();
setupSearch();
renderMovies();
