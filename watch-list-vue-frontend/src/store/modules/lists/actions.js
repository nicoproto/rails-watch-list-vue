export default {
  async loadLists(context) {
    const response = await fetch("http://localhost:3000/api/v1/lists");

    const responseData = await response.json();

    if (!response.ok) {
      // TODO: Handle error
    }

    const lists = [];

    for (const key in responseData) {
      const list = {
        id: responseData[key].id,
        name: responseData[key].name,
      };

      lists.push(list);
    }
    context.commit("setLists", lists);
  },
};
