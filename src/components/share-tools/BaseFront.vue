<template>
  <div class="front">
    <div class="front-part" id="left">
      <div class="left-title-container">
        <h1 class="left-title">Listado Canciones</h1>
      </div>
      <ul class="listed">
        <li class="unique-song">
          <div class="description-song">
            <h2 class="song-title">1-Cancion 1</h2>
            <h3 class="song-detail">Duration</h3>
            <img src="@/assets/like.png" alt="" class="like" />
          </div>
        </li>
        <li class="unique-song">
          <div class="description-song">
            <h2 class="song-title">2-Cancion 2</h2>
            <h3 class="song-detail">Duration</h3>
            <img src="@/assets/like.png" alt="" class="like" />
          </div>
        </li>
        <li class="unique-song">
          <div class="description-song">
            <h2 class="song-title">3-Cancion 3</h2>
            <h3 class="song-detail">Duration</h3>
            <img src="@/assets/like.png" alt="" class="like" />
          </div>
        </li>
        <li class="unique-song">
          <div class="description-song">
            <h2 class="song-title">4-Cancion 4</h2>
            <h3 class="song-detail">Duration</h3>
            <img src="@/assets/like.png" alt="" class="like" />
          </div>
        </li>
        <li class="unique-song">
          <div class="description-song">
            <h2 class="song-title">5-Cancion 5</h2>
            <h3 class="song-detail">Duration</h3>
            <img src="@/assets/like.png" alt="" class="like" />
          </div>
        </li>
      </ul>
    </div>
    <div class="front-part" id="center">
      <img src="" alt="" class="disc" />
      <div class="center-title">
        <h1 class="title">Titulo</h1>
        <h2 class="subtitle">Artista</h2>
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
        <div class="others-container">
          <img src="" alt="" class="disc-others" />
          <img src="" alt="" class="disc-others" />
          <img src="" alt="" class="disc-others" />
          <img src="" alt="" class="disc-others" />
        </div>
      </div>
    </div>
  </div>
</template>
