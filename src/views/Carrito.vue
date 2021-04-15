<template>
  <div class="Carrito-Container">
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

    <div class="container">
      <h3 class="Text-Separacion Bold">Carrito De Compras</h3>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-7 col-sm-12">
          <div class="Cursos-Container">
            <div
              v-for="(curso, index) in objetos[0]"
              :key="index"
              class="row item"
            >
              <div
                v-bind:style="{
                  backgroundImage: 'url(' + curso.imagenes[0].url + ')',
                }"
                class="Curso-Img col-md-3 col-sm-3"
              >
                <div class="Curso-Img"></div>
              </div>
              <div class="CursoInfo-Container col-md-9 col-sm-9">
                <div class="Container-Texto">
                  <div class="Otro-Container">
                    <div class="Titulo-Curso Hel-Font Bold">
                      {{ curso.titulo }}
                    </div>
                    <div class="Precio Hel-Font Bold">
                      s/ {{ curso.precio }}
                    </div>
                  </div>
                  <div class="Descuento Hel-Font"></div>
                </div>
                <div
                  @click="delItem"
                  class="Eliminar Hel-Font Bold"
                  :data-numero="index"
                >
                  Eliminar
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1 col-sm-12"></div>
        <div class="col-md-4 col-sm-12">
          <div class="Pago container">
            <div class="Subtotal">
              <h3>Sub Total</h3>
              <h3 class="Total-Num">s/ {{ total }}</h3>
            </div>
            <input
              type="text"
              class="Input-Descuento"
              placeholder="Agrega un código de descuento"
            />
            <div class="Pagar-Container">
              <button @click="goPayPal" class="Pagar White Bold">
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      objetos: [],
      cursos: [],
      total: 0,
      className: "ulInactivo",
    };
  },

  computed: {
    ...mapState(["cursos"]),
  },
  name: "Pago",

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

    goPayPal: function () {
      this.$router.push({ path: "/paypal" });
    },

    delItem: function (e) {
      console.log(e.target.dataset.numero);
      const position = e.target.dataset.numero;

      this.$store.state.cursos.splice(position, 1);
    },

    // getFinalPrice() {
    //   const value = 0;
    //   this.$store.state.cursos.forEach((curso) => {
    //     value += curso.precio * 1;
    //   });
    //   this.total = value;
    // },
  },

  created() {
    // this.getFinalPrice();
    this.objetos.push(this.$store.state.cursos);
    this.cursos.push(this.objetos[0]);
    console.log(this.$store.state.cursos);
    console.log(this.objetos);
    console.log(this.cursos);
    console.log(this.total);
  },
};
</script>


<style scoped>
.Bold {
  font-weight: bold;
}

.Hel-Font {
  font-family: Arial, Helvetica, sans-serif;
}

.White {
  color: white;
}

.Carrito-Container {
  height: 100vh;
  width: 100%;
}

.Nav-Box {
  width: 110px;

  display: flex;
  justify-content: space-between;
}

.Header-Nav {
  margin-top: -89px;
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

.Text-Separacion {
  margin-top: 8%;
  margin-bottom: 5%;
}

.Container-Texto {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Curso-Img {
  width: 100%;
  height: 125px;
  border-radius: 0.5em;

  background: cover;
}

.Container-Texto {
  display: block;
}

.Otro-Container {
  display: flex;
  justify-content: space-between;
}

.item {
  margin-bottom: 20px;
}

.Titulo-Curso {
  font-size: 110%;
}

.Precio {
  font-weight: 900;
  font-size: 110%;
}

.Descuento {
  color: blue;
}

.Eliminar {
  margin-top: 4vh;
  cursor: pointer;
  width: 63px;
  color: blue;
  border-bottom: solid blue;
}

.Pago {
}

.Curso-Img {
  background-size: cover;
}

.Subtotal {
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
  color: blue;
}

.Input-Descuento {
  margin-top: 5%;
  width: 100%;
  border: solid #b9bbb6 0.5px;
  height: 50px;
  border-radius: 0.5em;
}

.Pagar {
  margin-top: 10%;
  width: 100%;
  background-color: blue;
  border: solid blue 0.5px;
  height: 5vh;
  border-radius: 0.5em;
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
  z-index: 3;
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

@media (min-width: 375px) {
  .Curso-Img {
    width: 133px;
    height: 100px;
  }
}
</style>

