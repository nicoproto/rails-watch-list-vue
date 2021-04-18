import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      movies: [
        {
          id: "42",
          title: "12 Angry Men",
          overview: "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
          poster_url: "https://image.tmdb.org/t/p/w500/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
          rating: 9,
        },
        {
          id: "41",
          title: "Hamilton",
          overview: "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
          poster_url: "https://image.tmdb.org/t/p/w500/h1B7tW0t399VDjAcWJh8m87469b.jpg",
          rating: 6,
        },
        {
          id: "43",
          title: "Barney",
          overview: "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
          poster_url: "https://image.tmdb.org/t/p/w500/h1B7tW0t399VDjAcWJh8m87469b.jpg",
          rating: 4,
        }
      ]
    }
  },
  mutations,
  actions,
  getters
}