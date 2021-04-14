

<template>
  <div class="C row">
    <div class="Imagen-Intro col-xl-8 col-l-7 col-md-7">
      <div class="Img-Pacha">
        <img class="Image-Top" src="./images/PachaQTec.png" alt="" />
      </div>
      <div class="Texto-Container">
        <div class="Titulo-Container">
          <h1 class="Titulo White Hel-Font">
            ¡Explota todo tu potencial tecnológico!
          </h1>

          <h3 class="Texto White Hel-Font">
            Con nuestros programas de especialización
          </h3>
        </div>
      </div>
      <footer class="Footer">
        <div class="Footer-Text Hel-Font">Con el respaldo de:</div>
        <div class="Footer-Imgs">
          <img class="Footer-Img" src="./images/IntercorpBlanco.png" alt="" />
          <img class="Footer-Img" src="./images/IdatBlanco.png" alt="" />
          <img class="Footer-Img" src="./images/ZegelIpaeBlanco.png" alt="" />
        </div>
      </footer>
    </div>
    <div class="Formulario col-xl-4 col-l-5 col-md-5">
      <header class="Header row">
        <div class="Line row">
          <div class="Iniciar-Sesion col-6 Hel-Font">
            <div @click="goLogin" class="Inicio">Iniciar Seción</div>
          </div>
          <div @click="goRegister" class="Registrarse col-6 Hel-Font">
            <div class="Registrarse-Text">Registrarse</div>
          </div>
        </div>
        <div class="row">
          <form @submit.prevent="checkForm" class="Iniciar-Form" action="">
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
              v-model="vconfirmPassword"
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
    <div class="Media-900">
      <header class="Header row">
        <div class="Line row">
          <div class="Iniciar-Sesion col-6 Hel-Font">
            <div @click="goLogin" class="Inicio">Iniciar Seción</div>
          </div>
          <div @click="goRegister" class="Registrarse col-6 Hel-Font">
            <div class="Registrarse-Text">Registrarse</div>
          </div>
        </div>
        <div class="row">
          <form @submit.prevent="checkForm" class="Iniciar-Form" action="">
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
              v-model="vconfirmPassword"
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
      vname: null,
      vemail: null,
      vpassword: null,
      vconfirmPassword: null,
      errors: [],
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

    checkForm() {
      if (
        this.user.password &&
        this.user.email &&
        this.vpassword === this.vpassword
      ) {
        return true;
        goLogin();
      }

      this.errors = [];

      if (!this.user.username < 0) {
        this.errors.push("Se require Nombre");
      }

      if (!this.user.email < 0) {
        this.errors.push("Se require Email");
      }

      if (!this.user.password < 0) {
        this.errors.push("Se require Contraseña");
      }

      if (!this.vname) {
        this.errors.push("Se require");
      }

      if (this.vpassword != this.vconfirmPassword) {
        this.errors.push("La contraseña no coincide");
      }
    },
  },
};
</script>


<style scoped>
.White {
  color: white;
}

.Hel-Font {
  font-family: "Poppins", sans-serif;
}

.C {
  width: 100vw;
  height: 100vh;
  margin: 0%;
  padding: 0%;
}

.Imagen-Intro {
  /* display: flex; */
  /* flex-direction: column;
  justify-content: space-around; */
  box-sizing: border-box;
  padding-right: 20vw;
  padding-left: 5vw;
  padding-top: 2vh;
  /* scroll-padding-bottom: 2vh; */
  /* height: 100vh; */
  background-size: cover;
  background-image: url(./images/RegBack.png);
}

.Image-Top {
  margin-top: 25px;
  height: 33px;
  width: 184.28px;
  align-self: center;
}

.Texto-Container {
  margin-top: 200px;
  width: 56vw;
  display: flex;
  justify-content: flex-end;
}

.Titulo-Container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.Titulo {
  text-align: end;
  width: 343px;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 30px;
}

.Texto {
  direction: rtl;
  width: 202px;
  font-size: 15px;
  font-weight: 700;
}

.Footer-Text {
  font-size: 10px;
  margin-top: 155px;
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
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Line {
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: solid gray 2px;
}

.Iniciar-Sesion {
  box-sizing: border-box;

  font-weight: 800;
  height: 60px;

  font-size: 13.5px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.Inicio {
}

.Registrarse {
  box-sizing: border-box;

  font-weight: 800;
  height: 60px;

  font-size: 13.5px;
  border-bottom: solid black 5px;
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
  width: 100%;
  font-size: 13px;
}

.Inicio-Input::placeholder {
  padding-left: 8px;
}

.Registro-Submit {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: white;
  border: solid #5640ff 0.5px;
  border-radius: 0.5em;
  height: 50px;
  width: 100%;
  margin-top: 38vh;
  margin-bottom: 2vh;
  background-color: #5640ff;
}

.Change-Password {
  font-weight: 700;
  color: #5640ff;
}

.Media-900 {
  display: none;
}

@media (max-width: 1199px) {
  .Texto-Container {
    margin-top: 200px;
    width: 47vw;
    display: flex;
    justify-content: flex-end;
  }
}

@media (max-width: 900px) {
  .Imagen-Intro {
    display: none;
  }

  .Formulario {
    display: none;
  }
  .Media-900 {
    display: block;
  }

  .Registro-Submit {
  }
}
</style>
    
