<template>
  <div class="front">
    <div class="front-part" id="left">
      <img :src="songs.image" alt="" class="disc" />
      <div class="repro-container">
        <div class="left-title">
          <h2 class="title">{{ songs.data.title }}</h2>
          <p class="release-title">Relesed: {{ songs.data.release_date }}</p>
          <p class="label-title">Label: {{ songs.data.label }}</p>
        </div>
        <div class="repro">
          <audio controls class="audio"><source src="" /></audio>
          <div class="button-container">
            <button
              @click="songs.setSongs()"
              type="button"
              class="repro-button-back"
            >
              <img
                src="@/assets/images/arrow-back.png"
                class="arrow-img"
                alt=""
              />
            </button>
            <button
              @click="songs.setSongs()"
              type="button"
              class="repro-button-next"
            >
              <img
                src="@/assets/images/arrow-next.png"
                class="arrow-img"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="front-part" id="right">
      <ul class="listed">
        <li class="unique-song" v-for="item in songs.tracks" :key="item">
          <div class="description-song">
            <div class="description-left">
              <div class="button-play-container">
                <button
                  class="play-button"
                  @click.prevent="playSound(item.preview)"
                >
                  Play
                </button>
              </div>
            </div>
            <div class="description-center">
              <div class="song-container">
                <h2 class="song-title">{{ item.title }}</h2>
                <h3 class="song-artist">{{ item.artist.name }}</h3>
              </div>
              <div class="description-right">
                <h3 class="song-detail">
                  {{ songs.data.duration }}
                </h3>
                <img src="@/assets/images/like.png" alt="" class="like" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { useMusicStore } from "../stores/musicStore";
export default {
  name: "BaseFront",
  component: {},
  setup() {
    const songs = useMusicStore();
    return {
      songs,
    };
  },

  methods: {
    playSound(preview) {
      let audio = new Audio(preview);
      audio.play()
    },
  },
};
</script>
