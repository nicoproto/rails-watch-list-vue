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
  },
  destroyMovie(state, payload) {
    state.movies = state.movies.filter(movie => movie.id != payload.id);
    console.log(state.movies);
  }
};