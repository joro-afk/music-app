<template>
  <div class="front">
    <div class="front-part" id="left">
      <div class="left-title-container">
        <h1 class="left-title">{{ songs.data.title }}</h1>
      </div>
      <ul class="listed">
        <li class="unique-song" v-for="item in songs.songs" :key="item">
          <div class="description-song">
            <div class="description-right">
              <div class="button-play-container">
                <button @click.prevent="playSound(item.preview)">Play</button>
              </div>
            </div>
            <div class="description-center">
              <div class="song-container">
                <h2 class="song-title">{{ item.title }}</h2>
                <h3 class="song-artist">{{ item.artist.name }}</h3>
              </div>
              <div class="description-left">
                <h3 class="song-detail">{{ item.duration }}</h3>
                <img src="@/assets/like.png" alt="" class="like" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="front-part" id="center">
      <img :src="songs.data.cover_medium" alt="" class="disc" />
      <div class="center-title">
        <h2 class="subtitle">{{ songs.data.title }}</h2>
      </div>
      <div class="repro">
        <h2 class="title">---Barra tiempo---</h2>
        <div class="button-container">
          <button onclick="playVid()" type="button">Back</button>
          <button onclick="playVid()" type="button">Play</button>
          <button onclick="pauseVid()" type="button">Pause</button><br />
          <button onclick="playVid()" type="button">Next</button>
        </div>
      </div>
    </div>
    <div class="front-part" id="right">
      <div class="right-title-container">
        <h1 class="right-title">Letra</h1>
      </div>
      <div class="lyrics-container">
        <p class="lyrics">
          No paran de llegar Billetes vienen y billetes van Pisando los Jordan
          Yo ando listo, ustedes digan que plan Patrón Del Mal el mood Quieren
          mi hielo y también el champú De Medallo a Moscú Se grabó en cuatro y
          lo subió a YouTube Las morras me besan, pues las vuelvo locas a todas
          Se besan, ellas bailan y se alborotan No ocupan flores, solo un polvo
          que es rosa Y sigo bendecido, con lo mío en el camino, oh Puro Doble
          P, a la verga, wey, jaja Desde Medallo, ¿sí sabe?, Jeje ¡Chau! (Hecho
          en Medellín) Desde el barrio Antioquia Con El Bendito Pura Doble P
          Baguettes en mi pulsera En mi cadena y mis anillos No los heredé de
          niño, tuve que luchar Por eso chimba detrás mío Porque saben lo que
          cargo Que traigo billete largo Hay mucho pa' gastar Morras encima de
          mí, de mi ganga Y de to' lo que traigo en mi cuello (Por eso yo las
          detono en mi cuarto Y en ese culito va el sello) Las morras me besan,
          pues las vuelvo locas a todas Se besan, ellas bailan y se alborotan No
          ocupan flores, solo un polvo que es rosa Y sigo bendecido, con lo mío
          en el camino, oh
        </p>
      </div>
      <div class="others-reference">
        <h2 class="others">otros artistas</h2>
        <ul class="others-container">
          <li class="disc-others">
            <img :src="songs.datanext1.cover_medium" alt="" class="disc-next" />
          </li>
          <li class="disc-others">
            <img :src="songs.datanext2.cover_medium" alt="" class="disc-next" />
          </li>
          <li class="disc-others">
            <img :src="songs.datanext3.cover_medium" alt="" class="disc-next" />
          </li>
          <li class="disc-others">
            <img :src="songs.datanext4.cover_medium" alt="" class="disc-next" />
          </li>
        </ul>
      </div>
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
      let audio = new Audio(preview);     audio.play();
      console.log(audio);
    },
  },
};
</script>
