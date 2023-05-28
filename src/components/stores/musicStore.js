import { defineStore } from "pinia";
export const useMusicStore = defineStore({
  id: "musicStore",
  state() {
    return {
      songs: [],
    };
  },

  actions: {
    async setSongs() {
      // await fetch("https://api.deezer.com/user/2529/playlists", {
      //   method: "GET",
      //   "Origin": "http://localhost:8080/",
      //   "Api-Key": "a4286c4829cd81ec0b54760a6bd47afb",
      //   "Content-Type": "application/json",
      // })
      //   .then((response) => response.json())
      //   .then((data) => console.log(data));
    },
  },
});
