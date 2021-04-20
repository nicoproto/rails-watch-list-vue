export default {
  lists(state) {
    return state.lists;
  },
  hasLists(state) {
    return state.lists && state.lists.length > 0;
  },
};
