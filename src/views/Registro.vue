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
        <div class="Iniciar-Sesion col-6">Iniciar Sesion</div>
        <div @click="goRegister" class="Registrarse col-6">Registrarse</div>
        <div class="row">
          <form class="Iniciar-Form">
            <input
              v-model="user.email"
              class="Inicio-Input col-12"
              type="text"
              placeholder="Correo electrónico"
            />
            <input
              v-model="user.password"
              class="Inicio-Input col-12"
              type="text"
              placeholder="Contraseña"
            />
            <div class="Error">{{ errorMessage }}</div>
            <button @click="login" type="submit" class="Registro-Submit col-12">
              Enviar
            </button>
            <div class="Change-Password">¿Olvidaste tu contraseña?</div>
          </form>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
export default {
  name: "Registro",
  data() {
    return {
      user: {},
      loginStatus: 0,
      errorMessage: " ",
      foobar: null,
    };
  },

  methods: {
    goRegister: function () {
      this.$router.push({ path: "/registrarse" });
    },

    goHome: function () {
      this.$router.push({ path: "/" });
    },

    async login(e) {
      e.preventDefault();
      try {
        const post = await fetch(
          "https://djangoretofinal.herokuapp.com/auth/login/",
          {
            method: "POST",
            body: JSON.stringify(this.user),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // const body = await post

        const data = await post.json();

        this.loginStatus = post.status;
        console.log(this.loginStatus);
        this.$store.state.user = this.$store.state.user = Object.assign(data);
        this.$store.state.user.id = jwt.decode(data.tokens.access).user_id;
        console.log(this.$store.state.user);
        this.$router.push({ path: "/" });
      } catch (err) {
        this.errorMessage = "Intente de nuevo";
      }
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
  border-bottom: solid gray 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Registrarse {
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
  margin-top: 3vh;
  display: block;
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
  margin-top: 63vh;
  margin-bottom: 2vh;
  background-color: #5640ff;
}

.Change-Password {
  font-weight: 700;
  color: #5640ff;
}

@media (max-width: 375px) {
  .Imagen-Intro {
    display: none;
  }
}
</style>


<style>
button:focus {
  outline: 0;
}

input:focus,
textarea:focus {
  outline: 0;
  border: #b9bbb6 2px solid;
}

input:focus ~ .label,
textarea:focus ~ .label,
input:not(:focus):valid ~ .label,
textarea:not(:focus):valid ~ .label {
  top: -10px;
  left: 0;
  font-size: 11px;
}
</style>