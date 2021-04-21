export default {
  setLists(state, payload) {
    state.lists = payload;
  },
  setList(state, payload) {
    state.selectedList = payload;
  },
};
