export default {
  registerMovie(state, payload) {
    state.movies.push(payload);
  }
};