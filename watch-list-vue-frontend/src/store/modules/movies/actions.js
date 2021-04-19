export default {
  async registerMovie(context, payload) {
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
  }
};