<template>
  <nav class="Header-Nav">
    <img src="./images/PachaQTec.png" alt="" class="Nav-Logo" />
    <div class="Nav-Box">
      <img @click="goCarrito" src="./images/Cart.png" alt="" class="Nav-Car" />
      <img src="./images/MenuHamburguesa.png" alt="" class="Burger-Menu" />
    </div>
  </nav>

  <div class="container">
    <h3 class="Text-Separacion Bold">Pasarela de Pago</h3>
  </div>

  <div class="container-md">
    <div class="Grid-Container">
      <div class="Pago-Container">
        <div class="PayPalButton" ref="paypal"></div>
      </div>
      <div class="Curso-Pagar" v-if="!paidFor">
        <div class="Cursos-Container">
          <div v-for="(curso, index) in objetos[0]" :key="index" class="Curso">
            <div
              v-bind:style="{
                backgroundImage: 'url(' + curso.imagenes[0].url + ')',
              }"
              class="Curso-Img"
            ></div>
            <div class="Curso-Info">
              <div class="Curso-Titulo Hel-Font">{{ curso.titulo }}</div>
              <div class="Curso-PriceDel">
                <p class="Delete Hel-Font">Elimilar</p>
                <p class="Price Hel-Font">S/ {{ curso.precio }}</p>
              </div>
            </div>
          </div>
        </div>
        <input
          type="text"
          class="Descuento"
          placeholder="Agrega un código de descuento"
        />
        <div class="PrecioFinal-Container">
          <p class="Precio-Texto Hel-Font">Precio Final</p>
          <p class="Precio-Final Hel-Font">S/600</p>
        </div>
      </div>

      <div v-if="paidFor">
        <img src="https://media.giphy.com/media/j5QcmXoFWl4Q0/giphy.gif" />
      </div>
    </div>
  </div>
</template>

<script>
// import image from "../assets/lamp.png"
export default {
  name: "HelloWorld",
  data: function () {
    return {
      objetos: [],
      loaded: false,
      paidFor: false,
      product: {
        price: 777.77,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg",
      },
    };
  },
  mounted: function () {
    this.setLoaded();
  },
  methods: {
    setLoaded: function () {
      this.loaded = true;

      const order = [
        {
          description: "Pago total",
          amount: { currency_code: "USD", value: 0 },
        },
      ];
      //hago un for a cursos de state para crear los
      this.$store.state.cursos.forEach((curso) => {
        order[0].amount.value += curso.precio * 1;
      });
      console.log(order);
      //crear array de cursos de esta manera [{dewcription: }]
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: order,
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            if ((this.paidFor = true)) {
              this.$router.push({ path: "/comprado" });
            }
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
  },

  created() {
    this.objetos.push(this.$store.state.cursos);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
  margin: 0%;
  padding: 0%;
}

.Hel-Font {
  font-family: Arial, Helvetica, sans-serif;
}

.White {
  color: white;
}

.Header-Nav {
  z-index: 1;
  box-sizing: border-box;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* position: absolute;
  margin: 0%; */
  padding-right: 3%;
  padding-left: 3%;
  height: 4rem;
}

.Nav-Logo {
  align-self: center;
  width: 184.28px;
  height: 33px;
}

.Grid-Container {
  margin-top: 40px;
  display: grid;
  column-gap: 50px;
  grid-template-columns: 700px 355px;
}

.Pago-Container {
  grid-column: 1 / 2;
}

.Curso-Pagar {
  /* width: 355px; */
  grid-column: 2 / 3;
}

.Cursos-Container {
  width: 335px;

  display: grid;
  grid-template-columns: 355px;
  column-gap: 20px;

  /* justify-content: space-between; */
}

.Curso {
  width: 355px;
  display: flex;
}

.Curso-Img {
  margin-right: 25px;
  width: 133px;
  height: 100px;
  background-size: cover;
}

.Curso-Info {
  width: 182px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.Curso-PriceDel {
  width: 198px;
  display: flex;
  justify-content: space-between;
}

.Descuento {
  margin-top: 40px;
  width: 355px;
  height: 50px;
  border-radius: 0.5em;
  border: solid 0.5px;
}

.PrecioFinal-Container {
  margin-top: 30px;
  padding-top: 40px;
  width: 355px;
  display: flex;
  justify-content: space-between;
  border-top: solid;
}

.Delete {
  color: blue;
  font-weight: 700;
  border-bottom: solid blue 2px;
}

.Precio-Texto {
  color: blue;
  font-weight: 800;
  font-size: 20px;
}

.Precio-Final {
  color: blue;
  font-weight: 800;
  font-size: 20px;
}

.Curso {
  margin-bottom: 10px;
}
</style>
