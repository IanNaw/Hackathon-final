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
        <h1 class="Header-Title Hel-Font White">Titulo</h1>

        {{ titulo }}
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
  <div class="Curso-Container">
    <div class="Proposito-Container">
      <h2 class="Proposito-Texto">
        Desarrolla con nosotros aplicaciones web, utilizando las últimas
        tendencias de desarrollo Front End, implementando patrones funcionales,
        reactivos y manejo de estado.
      </h2>
      <img src="" alt="" class="Proposito-Img" />
    </div>
    <div class="Info-Container">
      <h2 class="Info-Titulo">¿En qué consiste el</h2>
      <p class="Info-Texto">
        Un desarrollador front end tiene que dominar HTML, CSS y JavaScript para
        darle vida a los diseños. Es responsable del desarrollo front-end de la
        interfaz gráfica de la aplicación web. El dinamismo de la tecnología
        front - end se encuentra principalmente en los frameworks, que son
        bibliotecas optimizadas para el desarrollo web
      </p>
    </div>
  </div>
</template>

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
  margin-top: -20%;
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
</style>