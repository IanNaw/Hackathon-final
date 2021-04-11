<template>
  <div class="Carrito-Container">
    <nav class="Header-Nav">
      <img src="./images/PachaQTec.png" alt="" class="Nav-Logo" />
      <div class="Nav-Box">
        <img src="./images/Carrito.png" alt="" class="Nav-Car" />
        <img src="./images/MenuHamburguesa.png" alt="" class="Burger-Menu" />
      </div>
    </nav>

    <div class="container">
      <h3 class="Text-Separacion Bold">Carrito De Compras</h3>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-7 col-sm-12">
          <div class="Cursos-Container">
            <div v-for="(curso, index) in objetos[0]" :key="index" class="row">
              <div class="col-md-3 col-sm-4">
                <img src="./images/Curso1.png" alt="" class="Curso-Img" />
              </div>
              <div class="CursoInfo-Container col-md-9 col-sm-8">
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
                <div class="Eliminar Hel-Font Bold">Eliminar</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-1 col-sm-12"></div>
        <div class="col-md-4 col-sm-12">
          <div class="Pago container">
            <div class="Subtotal">
              <h3>Sub Total</h3>
              <h3 class="Total-Num">s/600</h3>
            </div>
            <input
              type="text"
              class="Input-Descuento"
              placeholder="Agrega un código de descuento"
            />
            <div class="Pagar-Container">
              <router-link to="/paypal" class="Pagar">Continuar</router-link>
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
    };
  },

  computed: {
    ...mapState(["cursos"]),
  },
  name: "Pago",

  methods: {},

  created() {
    this.objetos.push(this.$store.state.cursos);
    this.cursos.push(this.objetos[0]);
    console.log(this.$store.state.cursos);
    console.log(this.objetos);
    console.log(this.cursos);
  },
};
</script>


<style>
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

.Text-Separacion {
  margin-top: 2%;
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
  background: cover;
}

.Container-Texto {
  display: block;
}

.Otro-Container {
  display: flex;
  justify-content: space-between;
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

@media (min-width: 375px) {
  .Curso-Img {
    width: 133px;
    height: 100px;
  }
}
</style>

