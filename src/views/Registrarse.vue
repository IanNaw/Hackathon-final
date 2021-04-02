
  <form class="Iniciar-Form" action="">
    <input
      class="Inicio-Input col-12"
      type="text"
      placeholder="Correo electrónico"
    />
    <input
      class="Inicio-Input col-12"
      type="email"
      placeholder="Correo electrónico"
    />
    <input class="Inicio-Input col-12" type="text" placeholder="Contraseña" />
    <input
      class="Inicio-Input col-12"
      type="text"
      placeholder="Repetir Contraseña"
    />
    <input class="Registro-Submit col-12" type="submit" />
  </form>
<template>
  <div class="C row">
    <div class="Imagen-Intro col-xl-8 col-l-7 col-md-6 col-sm-0">
      <img class="Image-Top" src="./images/PachaQTec.png" alt="" />
      <div class="Texto-Container">
        <h1 class="Titulo White">¡Explota todo tu potencial tecnológico!</h1>
        <h3 class="Texto White">Con nuestros programas de especialización</h3>
      </div>
      <footer class="Footer">
        <div class="Footer-Text">Con el respaldo de:</div>
        <div class="Footer-Imgs">
          <img class="Footer-Img" src="./images/IntercorpBlanco.png" alt="" />
          <img class="Footer-Img" src="./images/IdatBlanco.png" alt="" />
          <img class="Footer-Img" src="./images/ZegelIpaeBlanco.png" alt="" />
        </div>
      </footer>
    </div>
    <div class="col-xl-4 col-l-5 col-md-6 col-sm-12">
      <header class="Header row">
        <p class="Iniciar-Sesion col-6" @click="goLogin">Iniciar Sesion</p>
        <p class="Registrarse col-6">Registrarse</p>
        <div class="row">
          <form class="Iniciar-Form" action="">
            <input
              v-model="user.username"
              class="Inicio-Input col-12"
              type="text"
              placeholder="Usuario"
            />
            <input
              v-model="user.email"
              class="Inicio-Input col-12"
              type="email"
              placeholder="Correo electrónico"
            />
            <input
              v-model="user.password"
              class="Inicio-Input col-12"
              type="text"
              placeholder="Contraseña"
            />
            <input
              class="Inicio-Input col-12"
              type="text"
              placeholder="Repetir Contraseña"
            />
            <input
              @click="register"
              class="Registro-Submit col-12"
              type="submit"
            />
          </form>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registro",
  data() {
    return {
      user: {},
    };
  },

  components: {},

  methods: {
    goLogin: function () {
      this.$router.push({ path: "/registro" });
    },

    async register(e) {
      e.preventDefault();
      console.log(this.user);
      const post = await fetch(
        "https://djangoretofinal.herokuapp.com/auth/register/",
        {
          method: "POST",
          body: JSON.stringify(this.user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await post.json();
      console.log(data);
    },
  },
};
</script>


<style scoped>
.White {
  color: white;
}

.C {
  width: 100vw;
  height: 100vh;
  margin: 0%;
  padding: 0%;
}

.Imagen-Intro {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  padding-right: 20vw;
  padding-left: 5vw;
  padding-top: 2vh;
  scroll-padding-bottom: 2vh;
  /* height: 100vh; */
  background-size: cover;
  background-image: url(./images/RegBack.png);
}

.Image-Top {
  width: 9vw;
  align-self: center;
}

.Texto-Container {
}

.Footer-Text {
  font-weight: 700;
  color: white;
}

.Footer {
}

.Footer-Imgs {
  margin-top: 6px;
  width: 15vw;
  display: flex;
  justify-content: space-between;
}

.Footer-Img {
  align-self: center;
}

.Header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Iniciar-Sesion {
  height: 5vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

.Registrarse {
  height: 5vh;
  border-bottom: solid gray 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Iniciar-Form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Inicio-Input {
  margin-top: 2.5vh;

  justify-content: center;
  align-items: center;
  border: solid #b9bbb6 0.5px;
  border-radius: 0.5em;
  height: 50px;
  width: 25vw;
}

.Registro-Submit {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  color: white;
  border: solid #5640ff 0.5px;
  border-radius: 0.5em;
  height: 50px;
  width: 20vw;
  margin-top: 50vh;
  background-color: #5640ff;
}
</style>
    
