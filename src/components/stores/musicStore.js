import { defineStore } from "pinia";
export const useMusicStore = defineStore({
  id: "musicStore",
  state() {
    return {
      data: [],
      artist: [],
      datanext1: [],
      datanext2: [],
      datanext3: [],
      datanext4: [],
      songs: [],
      value: null,
    };
  },

  actions: {
    async setSongs() {
      this.getRandomInt();
      this.nextArtists1();
      this.nextArtists2();
      this.nextArtists3();
      this.nextArtists4();

      await fetch(`https://api.deezer.com/album/${this.value}`)
        .then((response) => response.json())
        .then((data) => {
          this.data = data;
          this.artist = data.artist;
          this.songs = data.tracks.data;
          console.log(data);
          console.log(this.songs);
        })
        .catch(() => {
          this.setSongs();
        });
    },

    async nextArtists1() {
      let min = Math.ceil(93000);
      let max = Math.floor(974178);
      this.x = Math.floor(Math.random() * (max - min) + min);
      await fetch(`https://api.deezer.com/album/${this.x}`)
        .then((response) => response.json())
        .then((data) => {
          this.datanext1 = data;
        })
        .catch((error) => {
          console.log(error);
          this.nextArtists1();
        });
    },
    async nextArtists2() {
      let min = Math.ceil(93000);
      let max = Math.floor(974178);
      this.x = Math.floor(Math.random() * (max - min) + min);
      await fetch(`https://api.deezer.com/album/${this.x}`)
        .then((response) => response.json())
        .then((data) => {
          this.datanext2 = data;
        })
        .catch((error) => {
          console.log(error);
          this.nextArtists2();
        });
    },
    async nextArtists3() {
      let min = Math.ceil(93000);
      let max = Math.floor(974178);
      this.x = Math.floor(Math.random() * (max - min) + min);
      await fetch(`https://api.deezer.com/album/${this.x}`)
        .then((response) => response.json())
        .then((data) => {
          this.datanext3 = data;
        })
        .catch((error) => {
          console.log(error);
          this.nextArtists3();
        });
    },
    async nextArtists4() {
      let min = Math.ceil(93000);
      let max = Math.floor(974178);
      this.x = Math.floor(Math.random() * (max - min) + min);
      await fetch(`https://api.deezer.com/album/${this.x}`)
        .then((response) => response.json())
        .then((data) => {
          this.datanext4 = data;
        })
        .catch((error) => {
          console.log(error);
          this.nextArtists4();
        });
    },

    getRandomInt(min, max) {
      min = Math.ceil(93000);
      max = Math.floor(974178);
      this.value = Math.floor(Math.random() * (max - min) + min);
      return this.value;
    },
  },
});
