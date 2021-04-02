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
            <div class="row">
              <div class="col-3">
                <img src="./images/Curso1.png" alt="" class="Curso-Img" />
              </div>
              <div class="CursoInfo-Container col-9">
                <div class="Container-Texto">
                  <div class="Otro-Container">
                    <div class="Titulo-Curso Hel-Font Bold">Gestion</div>
                    <div class="Precio Hel-Font Bold">s/269.00</div>
                  </div>
                  <div class="Descuento Hel-Font">Dto. 25%</div>
                </div>
                <div class="Eliminar Hel-Font Bold">Eliminar</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-4">
          <div class="container">
            <div class="Subtotal">
              <h3>Sub Total</h3>
              <h3 class="Total-Num">s/600</h3>
            </div>
            <input
              type="text"
              class="Input-Descuento"
              placeholder="Agrega un código de descuento"
            />
            <router-link to="/paypal">
              <button class="Comprar Bold White">Continuar</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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