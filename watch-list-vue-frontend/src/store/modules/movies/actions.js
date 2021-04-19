export default {
  async registerMovie(context, payload) {
    // TODO: Check to clean this up
    const movieData = {
      title: payload.title,
      overview: payload.overview,
      poster_url: payload.poster_url,
      rating: payload.rating
    }
    const response = await fetch("http://localhost:3000/api/v1/movies", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ "movie": movieData})
    });

    const responseData = await response.json();

    if (!response.status === 201) {
      // error ...
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

    if (!response.status === 201) {
      // error ...
    }

    console.log(responseData);

    const movies = [];

    for (const key in responseData) {
      const movie = {
        id: responseData[key].id,
        title: responseData[key].title,
        overview: responseData[key].overview,
        poster_url: responseData[key].poster_url,
        rating: responseData[key].rating
      }

      movies.push(movie);
    }

    context.commit("setMovies", movies);
  }
};