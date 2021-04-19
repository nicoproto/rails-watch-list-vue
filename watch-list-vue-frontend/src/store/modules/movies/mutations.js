export default {
  registerMovie(state, payload) {
    state.movies.push(payload);
  },
  setMovies(state, payload) {
    state.movies = payload;
  },
  setMovie(state, payload) {
    state.selectedMovie = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};