<template>
  <div class="Header-Container">
    <nav class="Header-Nav">
      <img src="./images/PachaQTec.png" alt="" class="Nav-Logo" />
      <div class="Nav-Box">
        <img
          @click="goCarrito"
          src="./images/Cart.png"
          alt=""
          class="Nav-Car"
        />
        <img
          src="./images/MenuHamburguesa.png"
          alt=""
          class="Burger-Menu"
          @click="abrirMenu"
        />
      </div>

      <ul :class="className">
        <li @click="goHome" class="li">Home</li>
        <li @click="goLogIn" class="li">LogIn</li>
        <li @click="goCarrito" class="li">Carrito</li>
        <li @click="goPagar" class="li">Pagar</li>
      </ul>
    </nav>
    <div class="Header-Text">
      <h1 class="Header-Title Hel-Font White">
        ¡Explota todo tu potencial tecnológico!
      </h1>
      <p class="Header-Desc Hel-Font White">
        Con nuestros programas de especialización
      </p>
    </div>

    <div class="Header-Phone">
      <p class="Phone-Info Hel-Font">
        Postula y obten un 10% de descuento en el programa
      </p>

      <input
        v-model="formulario.nombre"
        type="text"
        class="Phone-Input Hel-Font"
        placeholder="NOMBRE"
      />
      <input
        v-model="formulario.celular"
        type="text"
        class="Phone-Input Hel-Font"
        placeholder="CELULAR"
      />
      <input
        v-model="formulario.correo"
        type="text"
        class="Phone-Input"
        placeholder="CORREO ELECTRÓNICO"
      />
      <input
        v-model="formulario.programa"
        type="text"
        class="Phone-Input Hel-Font"
        placeholder="PROGRAMA"
      />

      <input
        v-model="formulario.terminos"
        type="checkbox"
        class="Phone-CheckBox"
        name="CheckBox"
      />
      <label class="CheckBox-Text Hel-Font" for="CheckBox "
        >Acepto las politicas de privacidad</label
      >

      <input
        type="submit"
        class="Phone-Submit Hel-Font"
        value="Quiero Postular"
      />
    </div>
    <img class="WhatsApp" src="./images/WhatsApp.png" alt="" />
  </div>

  <div class="Respaldo-Contianer">
    <div class="Images-Contianer">
      <div class="Respaldo">Con el respaldo de:</div>
      <div class="Respaldo-Imgs">
        <img class="Respaldo-Img" src="./images/Intercorp.png" alt="" />
        <img class="Respaldo-Img" src="./images/Idat.png" alt="" />
        <img class="Respaldo-Img" src="./images/Zegelipae.png" alt="" />
      </div>
    </div>
  </div>

  <div class="Antes-Gird Hel-Font">
    Conoce nuestros Programas de Especialización
  </div>

  <div class="Cursos-Grid">
    <div
      v-for="(curso, index) in cursos"
      :key="index"
      class="item"
      v-bind:style="{ backgroundImage: 'url(' + curso.imagenes[0].url + ')' }"
    >
      <div class="Curso-Tema White">{{ curso.titulo }}</div>
      <div class="Curso-Container">
        <div class="Curso-Agregar White" :data-id="curso.id" @click="addToCart">
          Agregar
        </div>
        <div class="Curso-Ver White Hel-Font">
          <img class="Mas-Img" src="./images/Mas.png" alt="" />
          <p class="Ver-Mas">Ver Más</p>
        </div>
      </div>
    </div>
  </div>

  <div class="Mensaje-Container">
    <img src="./images/Mujer.png" alt="" class="Mensaje-Img" />
    <div class="Mensaje">
      <div class="Mensaje-Titulo Hel-Font White">Sé parte de la comunidad</div>
      <div class="Mensaje-Texto Hel-Font White">
        Programas semi-presenciales para el desarrollo de habilidades de
        programación a lo largo de todo el Stack tecnológico
      </div>
      <div class="Mensaje-Texto Hel-Font White">
        Al finalizar sabrás cómo crear una página web y desarrollar la lógica
        detrás del funcionamiento de una aplicación, así como formar parte de
        una gran comunidad de desarrolladores.
      </div>
    </div>
  </div>

  <div class="Beneficios-Container">
    <p class="Ben Hel-Font">Beneficio</p>
    <div class="Beneficios">
      <div class="Beneficio">
        <img class="Beneficio-Img" src="./images/Personas.png" alt="" />
        <div class="Texto-Container Hel-Font">
          <div class="Beneficio-Titulo">Aprende de Expertos</div>
          <div class="Beneficio-Texto">
            Aprende directamente de expertos del mercado a través del análisis y
            solución de problemas de programación. Utilizando los frameworks y
            herramientas de mayor relevancia dentro del mundo del coding.
          </div>
        </div>
      </div>
      <div class="Beneficio">
        <img class="Beneficio-Img" src="./images/Monitor.png" alt="" />
        <div class="Texto-Container Hel-Font">
          <div class="Beneficio-Titulo">Clases Virtuales</div>
          <div class="Beneficio-Texto">
            Aprovecha tu tiempo al máximo en nuestras clases virtuales y
            participa presencialmente de nuestras hackathones semanales para
            conocer y participar de la comunidad profesional que liderará la
            transformación tecnológica del Perú.
          </div>
        </div>
      </div>
      <div class="Beneficio">
        <img class="Beneficio-Img" src="./images/Maleta.png" alt="" />
        <div class="Texto-Container Hel-Font">
          <div class="Beneficio-Titulo">Empleabilidad</div>
          <div class="Beneficio-Texto">
            Al finalizar el programa y certificarte a nombre de IDAT, podrás
            acceder a ofertas laborales especialmente identificadas para la
            comunidad PachaQTec, a través de nuestra plataforma de empleabilidad
            IDAT JOB.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="Encuesta-Media">
    <p class="Phone-Info Hel-Font">
      Postula y obten un 10% de descuento en el programa
    </p>

    <input
      v-model="formulario.nombre"
      type="text"
      class="Phone-Input Hel-Font"
      placeholder="NOMBRE"
    />
    <input
      v-model="formulario.celular"
      type="text"
      class="Phone-Input Hel-Font"
      placeholder="CELULAR"
    />
    <input
      v-model="formulario.correo"
      type="text"
      class="Phone-Input"
      placeholder="CORREO ELECTRÓNICO"
    />
    <input
      v-model="formulario.programa"
      type="text"
      class="Phone-Input Hel-Font"
      placeholder="PROGRAMA"
    />

    <input
      v-model="formulario.terminos"
      type="checkbox"
      class="Phone-CheckBox"
      name="CheckBox"
    />
    <label class="CheckBox-Text Hel-Font" for="CheckBox "
      >Acepto las politicas de privacidad</label
    >

    <input
      type="submit"
      class="Phone-Submit Hel-Font"
      value="Quiero Postular"
    />
  </div>

  <footer class="Footer-Container">
    <div class="Footer">
      <div class="Footer-Texto Hel-Font White">Con el respaldo de:</div>
      <div class="Footer-Imgs">
        <img class="Footer-Img" src="./images/IntercorpBlanco.png" alt="" />
        <img class="Footer-Img" src="./images/IdatBlanco.png" alt="" />
        <img class="Footer-Img" src="./images/ZegelIpaeBlanco.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      cursos: [],
      formulario: {},
      carrito: {},
      className: "ulInactivo",
    };
  },

  methods: {
    abrirMenu() {
      this.className === "ulInactivo"
        ? (this.className = "ulActivo")
        : (this.className = "ulInactivo");
      console.log(this.claseUl);
    },

    goHome: function () {
      this.$router.push({ path: "/" });
    },

    goLogin: function () {
      this.$router.push({ path: "/registro" });
    },

    goPagar: function () {
      this.$router.push({ path: "/paypal" });
    },

    goCarrito: function () {
      this.$router.push({ path: "/carrito" });
    },
    async getCurso() {
      const info = await fetch(
        "https://djangoretofinal.herokuapp.com/curso/v1/cursos/"
      );
      const data = await info.json();
      this.cursos = data;
      console.log(this.cursos);
    },

    async postData() {
      console.log(JSON.stringify(this.formulario));
      const post = await fetch(
        "https://djangoretofinal.herokuapp.com/interesado/v1/interesados/",
        {
          method: "POST",
          body: JSON.stringify(this.formulario),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },

    async postCurso() {
      const post = await fetch(
        "https://djangoretofinal.herokuapp.com/interesado/v1/interesados/",
        {
          method: "POST",
          body: JSON.stringify(this.cursos[cursoIndex]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    },

    addToCart: function (e) {
      const cursoID = Number(e.target.dataset.id);
      const cursoIndex = this.cursos.findIndex((curso) => curso.id === cursoID);
      console.log(cursoID, cursoIndex);
      this.$store.state.cursos.push(this.cursos[cursoIndex]);
    },
  },
  created() {
    this.getCurso();
    window.store = this.$store.state; ///////////////////////BORRAR!!!!!!!!
  },
};
</script>


<style scoped>
body {
  margin: 0%;
  padding: 0%;
}

.Hel-Font {
  font-family: "Poppins", sans-serif;
}

.White {
  color: white;
}

.Header-Container {
  z-index: 2;
  /* margin-top: -13rem; */
  height: 500px;
  width: 100%;
  position: relative;
  background-image: url("./images/HeaderBack.jpg");
  background-size: cover;
}

.Nav-Box {
  width: 110px;

  display: flex;
  justify-content: space-between;
}

.Header-Nav {
  box-sizing: border-box;
  z-index: 1;
  box-sizing: border-box;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;

  padding-right: 3%;
  padding-left: 3%;
  height: 4rem;
}

.Nav-Logo {
  align-self: center;
  width: 184.28px;
  height: 33px;
}

.Header-Text {
  width: 712px;
  font-weight: 400;
  height: 75px;
  z-index: 3;

  margin-left: 5%;
  /* margin-top: 200px; */
}

.Header-Desc {
  font-weight: 600;
  font-size: 18px;
}

.Header-Title {
  padding-top: 210px;
  font-weight: 700;
  width: 712px;
  margin-bottom: 40px;
  font-size: 320%;
}

/*////// Menu //////*/

.ulInactivo {
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  background: silver;
  top: 4rem;
  left: -100%;
  text-align: center;
  transition: all 0.5s;
}

.li {
  margin-top: 20px;
  font-weight: 800;
  display: block;
  height: 50px;
  font-size: 20px;
  border-bottom: solid black 2px;
}

.li:hover {
  color: slateblue;
}

.ulActivo {
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  position: fixed;
  width: 230px;
  height: 100vh;
  background: silver;
  top: 4rem;
  left: 0;
  text-align: center;
  transition: all 0.5s;
}

/*////// Phone //////*/
.Phone-Info {
  margin-top: 20px;
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 600;
  font-size: 15px;
  width: 215px;
  height: 48px;
}

.Header-Phone {
  position: fixed;
  background-image: url("./images/mobile.png");
  height: 608px;
  width: 370px;
  margin-top: 0;
  margin-left: 65%;
  background-size: cover;
  box-sizing: border-box;
  padding: 4rem;
}

.Phone-Input {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: block;
  font-size: 12px;
  border: solid #b9bbb6 0.5px;
  border-radius: 0.5em;
  height: 50px;
  width: 216px;
}

.Phone-Input::placeholder {
  padding-left: 6px;
}

.Phone-CheckBox {
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 0.4rem;
  border: solid black 10px;
}

.CheckBox-Text {
  font-size: 11px;
  font-weight: 600;
  margin-right: 0.3rem;
}

.Phone-Submit {
  width: 216px;
  height: 50px;
  font-weight: 700;
  background-color: #5640ff;
  color: white;
  border: solid #5640ff 0.5px;
  border-radius: 0.5em;
  margin-left: 1.1rem;
  margin-right: 1, 1rem;
  margin-top: 3rem;
}

.WhatsApp {
  position: fixed;
  margin-top: 37%;
  margin-left: 93%;
}

/*////// Respaldo //////*/
.Respaldo {
  font-size: 12px;
}

.Respaldo-Container {
  display: flex;
}

.Images-Contianer {
  margin-top: 3rem;
  margin-left: 5%;
  font-family: Arial, Helvetica, sans-serif;
  width: 233px;
  height: 63.08px;
}
.Respaldo-Imgs {
  margin-top: 6px;

  display: flex;
  justify-content: space-between;
}

.Respaldo-Img {
  align-self: center;
}

/*////// Cursos //////*/
.Antes-Gird {
  margin-top: 130px;
  margin-left: 5%;
  font-size: 20px;
  font-weight: 750;
}

.Cursos-Grid {
  display: grid;
  column-gap: 5%;
  row-gap: 5%;
  grid-template-rows: auto;
  grid-template-columns: repeat(2, 344px);
  width: 32.5%;
  margin-left: 5%;
  margin-top: 30px;
}

.item {
  border-radius: 1em;
  background-color: blue;
  box-sizing: border-box;
  padding: 7%;
  padding-top: 70%;
  width: 344px;
  height: 320px;
}

.Curso-Tema {
  display: block;
  font-weight: 700;
}

.Curso-Container {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}

.Curso-Agregar {
  cursor: pointer;
}

.Curso-Ver {
  box-sizing: border-box;
  width: 94px;
  height: 24px;
  display: flex;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;
}

.Mas-Img {
  align-self: center;
}

.Ver-Mas {
  padding-top: 17px;
}

/*////// Mensaje //////*/
.Mensaje-Container {
  margin-top: 15rem;
  width: 100%;
  height: 17rem;
  display: flex;
  background-color: #3015fd;
}

.Mensaje-Img {
  width: 323px;
  height: 418.89px;
  margin-top: -75px;
  margin-left: -120px;
}

.Mensaje {
  width: 563px;
  height: 12rem;
}

.Mensaje-Titulo {
  padding-top: 10%;
  font-size: 20px;
  font-weight: 900;
}

.Mensaje-Texto {
  font-size: 15px;
  margin-top: 3%;
}

/*////// Beneficios //////*/
.Beneficios-Container {
  margin-top: 9%;
  margin-left: 5%;
}
.Ben {
  font-weight: 700;
  font-size: 140%;
}
.Beneficio {
  border-radius: 1em;
  padding-bottom: 2%;
  padding-top: 2%;
  box-sizing: border-box;
  margin-top: 2%;
  width: 718px;
  height: 160px;
  background-color: #f2f3f5;
  display: flex;
  justify-content: space-around;
  align-self: center;
}

.Beneficio-Titulo {
  /* margin-bottom: 1%; */
  font-weight: 560;
  font-size: 115%;
}

.Texto-Container {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Beneficio-Texto {
  font-size: 85%;
}

.Beneficio-Img {
  align-self: center;
}

.Encuesta-Media {
  display: none;
}

.Footer-Text {
  margin-left: 5%;
  font-weight: 700;
}

.Footer {
  font-size: 12px;
  margin-left: 5%;
}

.Footer-Container {
  box-sizing: border-box;
  padding-left: 2%;
  margin-top: 7%;
  box-sizing: border-box;
  padding-top: 1%;
  padding-bottom: 1%;

  background-color: black;
}

.Footer-Imgs {
  /* margin-left: 5%; */
  margin-top: 6px;
  width: 233px;
  display: flex;
  justify-content: space-between;
}

.Footer-Img {
  align-self: center;
}

@media (max-width: 375px) {
  .Header-Container {
    width: 375px;
    height: 300px;
  }

  .Header-Text {
    margin: 0%;
    width: 343px;
  }

  .Header-Title {
    /* margin-top: 80px; */
    width: 343px;
    font-size: 150%;
    font-weight: 900;
  }

  .Header-Desc {
    margin-top: 20px;
    font-weight: 700;
    width: 202px;
    height: 48px;
  }

  .Header-Phone {
    display: none;
  }

  .Cursos-Grid {
    display: grid;
    margin-left: 2.5%;
    margin-right: 2.5%;
    grid-template-columns: 355px;
    row-gap: 2%;
  }

  .item {
    background-size: cover;
    width: 355px;
    height: 222px;
    margin: 0%;
  }

  .Mensaje {
    margin-left: 2.5%;
    margin-right: 2.5%;
  }

  .Mensaje-Container {
    margin-top: 60%;
    width: 375px;
    height: 516px;
  }

  .Mensaje-Img {
    margin-top: -30%;
    margin-left: 5px;
  }

  .Mensaje-Titulo {
    margin-top: -100px;
    width: 323px;
  }

  .Mensaje-Texto {
    width: 323px;
  }

  .Curso-Tema {
    width: 355px;
    margin-top: -20%;
  }

  .Curso-Container {
    width: 355px;
  }

  .Mensaje-Container {
    width: 355px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .Mensaje-Img {
    width: 241px;
    height: 311.89px;
    margin-top: -75px;
    /* margin-left: -120px; */
  }

  .Mensaje {
    width: 323px;
    /* height: 12rem; */
  }

  .Beneficios-Container {
    margin-left: 2.5%;
    margin-right: 2.5%;
  }

  .Beneficio {
    margin: 0%;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    width: 355px;
    height: 108px;
  }

  .Beneficio-Titulo {
    margin-left: 20px;
  }

  .Beneficio-Texto {
    display: none;
  }

  .Encuesta-Media {
    display: block;
    width: 100%;
  }

  .Phone-Input {
    margin-top: 1rem;
    /* margin-left: 1rem;
    margin-right: 1rem; */
    display: block;
    border: solid #b9bbb6 0.5px;
    border-radius: 0.5em;
    height: 50px;
    width: 100%;
  }

  .Phone-CheckBox {
    /* margin-top: 1rem;
    margin-left: 1rem; */
    margin-right: 0.4rem;
    border: solid black 10px;
  }

  .CheckBox-Text {
    font-size: 12.5px;
    font-weight: 700;
    margin-right: 0.3rem;
  }

  .Phone-Submit {
    width: 100%;
    height: 50px;
    background-color: #5640ff;
    color: white;
    border: solid #5640ff 0.5px;
    border-radius: 0.5em;
    margin-left: 1.1rem;
    margin-right: 1.1rem;
    margin-top: 3rem;
  }
  .WhatsApp {
    margin-left: 76%;
    margin-top: 50vh;
  }
}
</style>

