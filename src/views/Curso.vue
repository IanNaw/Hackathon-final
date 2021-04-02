<template>
  <div class="about">
    <div class="Header-Container">
      <nav class="Header-Nav">
        <img src="./images/PachaQTec.png" alt="" class="Nav-Logo" />
        <div class="Nav-Box">
          <img src="./images/Carrito.png" alt="" class="Nav-Car" />
          <img src="./images/MenuHamburguesa.png" alt="" class="Burger-Menu" />
        </div>
      </nav>
      <div class="Header-Text">
        <h1 class="Header-Title Hel-Font White">
          {{ curso.titulo }}
          <!--  -->
        </h1>
      </div>

      <div class="Header-Phone">
        <p class="Phone-Info Hel-Font">
          Postula y obten un 10% de descuento en el programa
        </p>

        <input type="text" class="Phone-Input Hel-Font" placeholder="NOMBRE" />
        <input type="text" class="Phone-Input Hel-Font" placeholder="CELULAR" />
        <input
          type="text"
          class="Phone-Input"
          placeholder="CORREO ELECTRÓNICO"
        />
        <input
          type="text"
          class="Phone-Input Hel-Font"
          placeholder="PROGRAMA"
        />
        <input type="checkbox" class="Phone-CheckBox" name="CheckBox" />
        <label class="CheckBox-Text Hel-Font" for="CheckBox "
          >Acepto las politicas de privacidad</label
        >
        <input
          type="submit"
          class="Phone-Submit Hel-Font"
          value="Quiero Postular"
        />
      </div>
    </div>
  </div>

  <!-- HTML CURSO -->

  <div class="Curso-Container Hel-Font">
    <div class="Proposito-Container">
      <h2 class="Proposito-Texto">
        {{ curso.titulo_largo }}
      </h2>
      <img src="" alt="" class="Proposito-Img" />
    </div>
    <div class="Info-Container">
      <h2 class="Info-Titulo">¿En qué consiste el {{ curso.titulo }} ?</h2>
      <p class="Info-Texto">
        {{ curso.descripcion }}
      </p>
    </div>
    <!-- Grid Del Horario -->
    <div class="Horario-Grid Hel-Font">
      <div class="Horario-Inicio White Bold">Inicio de clases: 6 de abril</div>
      <div class="Horario-Frecuencia White Bold">Frecuencia</div>
      <div class="Horario-Hora White Bold">Horario</div>
      <div class="Frecuencia-Container">
        <div
          v-for="(horario, index) in curso.horarios"
          :key="index"
          class="Frecuencia"
        >
          <p>{{ horario.frecuencia }}</p>
        </div>
      </div>
      <div class="Hora-Container">
        <div
          v-for="(horario, index) in curso.horarios"
          :key="index"
          class="Hora"
        >
          <p>{{ horario.horario }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      curso: {},
    };
  },

  methods: {
    async getCurso() {
      const info = await fetch(
        `https://djangoretofinal.herokuapp.com/curso/v1/cursos/${this.$route.params.id}`
      );
      const data = await info.json();
      this.curso = data;
      console.log(this.data);
    },
  },

  created() {
    this.getCurso();
  },
};
</script>

<style>
body {
  margin: 0%;
  padding: 0%;
}

.Bold {
  font-weight: bold;
}

.Hel-Font {
  font-family: Arial, Helvetica, sans-serif;
}

.White {
  color: white;
}

/* ///Header CSS// */

.Header-Container {
  height: 500px;
  width: 100%;
  background-image: url("./images/HeaderBack.jpg");
  background-size: cover;
}

.Header-Nav {
  box-sizing: border-box;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 3%;
  padding-left: 3%;
  height: 4rem;
}

.Nav-Logo {
  height: 33px;
}

.Header-Text {
  margin-left: 20%;
  margin-top: 206px;
}

.Header-Title {
  width: 712px;
  font-size: 350%;
}

/*///Phone CSS///*/

.Phone-Info {
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 700;
  font-size: 17px;
}

.Header-Phone {
  position: fixed;
  background-image: url("./images/mobile.png");
  height: 608px;
  width: 390px;
  margin-top: -20vh;
  margin-left: 60%;
  background-size: cover;
  box-sizing: border-box;
  padding: 4rem;
}

.Phone-Input {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: block;
  border: solid #b9bbb6 0.5px;
  border-radius: 0.5em;
  height: 50px;
  width: 216px;
}

.Phone-CheckBox {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 0.4rem;
}

.CheckBox-Text {
  font-size: 12.5px;
  font-weight: 700;
  margin-right: 1rem;
}

.Phone-Submit {
  width: 216px;
  height: 50px;
  background-color: #5640ff;
  color: white;
  border: solid #5640ff 0.5px;
  border-radius: 0.5em;
  margin-left: 1.1rem;
  margin-right: 1, 1rem;
  margin-top: 3rem;
}

.Curso-Container {
  margin-left: 20%;
  margin-top: 3%;
}

.Proposito-Container {
  width: 36%;
}

.Proposito-Texto {
  font-size: 130%;
}

.Info-Container {
  width: 42%;
  height: 12rem;
}

.Horario-Grid {
  /* border: solid black; */
  display: grid;
  grid-template-rows: repeat(2, 50%);
  grid-template-columns: 20% 40% 40%;
  width: 43.5%;
}

.Horario-Inicio {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-color: #5640ff;
}

.Horario-Frecuencia {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  background-color: black;
}

.Horario-Hora {
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  background-color: black;
}

.Frecuencia-Container {
  background-color: #b9bbb6;
}

.Hora-Container {
  background-color: #b9bbb6;
}
</style>