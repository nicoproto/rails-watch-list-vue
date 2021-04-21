export default {
  setLists(state, payload) {
    state.lists = payload;
  },
  setList(state, payload) {
    state.selectedList = payload;
  },
  destroyList(state, payload) {
    state.lists = state.lists.filter((list) => list.id != payload.id);
  },
  registerList(state, payload) {
    state.lists.push(payload);
  }
};
