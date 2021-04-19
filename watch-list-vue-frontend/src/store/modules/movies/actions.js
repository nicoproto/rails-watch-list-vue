export default {
  registerMovie(context, payload) {
    const movieData = {
      id: "c3",
      title: payload.title,
      overview: payload.overview,
      poster_url: payload.poster_url,
      rating: payload.rating
    }

    context.commit("registerMovie", movieData);
  }
};