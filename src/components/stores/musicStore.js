import { defineStore } from "pinia";

export const useMusicStore = defineStore({
  id: "musicStore",
  state() {
    return {
      data: [],
      tracks: [],
      value: null,
      image: undefined,
    };
  },

  actions: {
    async setSongs() {
      this.getRandomInt();
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "eeb82b93e9msh1cd098fca9b6e27p1fae80jsn9df333442437",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };
      try {
        await fetch(
          `https://deezerdevs-deezer.p.rapidapi.com/album/${this.value}`,
          options
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.data = data;
            this.tracks = data.tracks.data;
            this.image = data.cover_medium;
          });
      } catch (error) {
        this.setSongs();
        console.error(error);
      }
    },

    getRandomInt(min, max) {
      min = Math.ceil(95000);
      max = Math.floor(950000);
      this.value = Math.floor(Math.random() * (max - min) + min);
      return this.value;
    },

    playSound(preview) {
      this.audio = new Audio(preview);
      this.audio.play();
      console.log(this.audio);
    },
  },
});
