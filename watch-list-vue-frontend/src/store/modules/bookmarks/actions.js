export default {
  async loadBookmarks(context, payload) {
    const response = await fetch(`http://localhost:3000/api/v1/lists/${payload.list_id}/bookmarks`);

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch bookmarks!");
      throw error;
    }

    const bookmarks = [];

    for (const key in responseData) {
      const bookmark = {
        id: responseData[key].id,
        comment: responseData[key].comment,
        movie: responseData[key].movie,
        list_id: responseData[key].list_id,
      }
      bookmarks.push(bookmark);
    }

    context.commit("setBookmarks", bookmarks);
  }
};