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
        <div class="col-7">
          <div class="Cursos-Container">
            <div
              v-for="(curso, index) in objetos[0]"
              :key="index"
              class="Curso row"
            >
              <div class="col-3">
                <div
                  v-bind:style="{
                    backgroundImage: 'url(' + curso.imagenes[0].url + ')',
                  }"
                  class="Curso-Img"
                ></div>
              </div>
              <div class="CursoInfo-Container col-9">
                <div class="Container-Texto">
                  <div class="Otro-Container">
                    <div class="Titulo-Curso Hel-Font Bold">
                      {{ curso.titulo }}
                    </div>
                    <div class="Precio Hel-Font Bold">{{ curso.precio }}</div>
                  </div>
                  <div class="Descuento Hel-Font"></div>
                </div>
              </div>
            </div>
            <div class="Footer-Pago">
              <div class="Total-Pagado">Precio Final</div>
              <div class="Total-Precio">s/600</div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <div class="container">
            <div class="Subtotal">
              <h3>¡Compra exitosa!</h3>
            </div>
            <p>
              La boleta o factura solicitada será enviada a tu correo en unos
              momentos.
            </p>
            <router-link to="/">
              <button class="Comprar Bold White">Volver a mis cursos</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objetos: [],
    };
  },

  created() {
    this.objetos.push(this.$store.state.cursos);
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

/*  */
.Carrito-Container {
  height: 100vh;
  width: 100%;
}

/*  */
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

/*  */
.Text-Separacion {
  margin-top: 2%;
  margin-bottom: 5%;
}

/*  */
.Curso {
  margin-bottom: 20px;
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

/*  */

.Footer-Pago {
  margin-top: 5vh;
  color: blue;
  font-size: 130%;
  font-weight: 900;
  border-top: #c4c4c4 solid;
  display: flex;
  justify-content: space-between;
}

/*  */
.Subtotal {
  font-weight: 900;
  display: flex;
  justify-content: space-between;
}

.Input-Descuento {
  margin-top: 5%;
  width: 100%;
  border: solid #b9bbb6 0.5px;
  height: 5vh;
  border-radius: 0.5em;
}

.Comprar {
  margin-top: 10%;
  width: 100%;
  background-color: blue;
  border: solid blue 0.5px;
  height: 5vh;
  border-radius: 0.5em;
}
</style>