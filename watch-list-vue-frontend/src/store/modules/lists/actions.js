export default {
  async loadLists(context) {
    const response = await fetch("http://localhost:3000/api/v1/lists");

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch lists!");
      throw error;
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
  async loadList(context, payload) {
    const response = await fetch(
      `http://localhost:3000/api/v1/lists/${payload.id}`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch movie");
      throw error;
    }

    context.commit("setList", responseData);
  },
};
