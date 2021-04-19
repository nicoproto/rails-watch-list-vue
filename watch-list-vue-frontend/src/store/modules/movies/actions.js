export default {
  async registerMovie(context, payload) {
    // TODO: Check to clean this up
    const movieData = {
      title: payload.title,
      overview: payload.overview,
      poster_url: payload.poster_url,
      rating: payload.rating
    }
    const response = await fetch("http://localhost:3000/api/v1/movi es", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "movie": movieData})
    });

    const responseData = await response.json();

    if (!response.status.ok) {
      const error = new Error(responseData.message || "Failed to create movie!");
      throw error;
    }

    console.log(responseData);

    context.commit("registerMovie", {
      ...movieData,
      id: responseData.id
    });
  },
  async loadMovies(context) {
    const response = await fetch("http://localhost:3000/api/v1/movies");

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch movies!");
      throw error;
    }

    const movies = [];

    for (const key in responseData) {
      const movie = {
        id: responseData[key].id,
        title: responseData[key].title,
        poster_url: responseData[key].poster_url,
        rating: responseData[key].rating
      }

      movies.push(movie);
    }

    context.commit("setMovies", movies);
  },
  async loadMovie(context, payload) {
    const response = await fetch(`http://localhost:3000/api/v1/movies/${payload.id}`);

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch movie!");
      throw error;
    }

    console.log(responseData)

    context.commit("setMovie", responseData);
  }
};