export default {
  registerMovie(state, payload) {
    state.movies.push(payload);
  },
  setMovies(state, payload) {
    state.movies = payload;
  }
};