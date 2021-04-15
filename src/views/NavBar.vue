<template>
  <nav class="Header-Nav">
    <img src="./images/PachaQTec.png" alt="" class="Nav-Logo" />
    <div class="Nav-Box">
      <img @click="goCarrito" src="./images/Cart.png" alt="" class="Nav-Car" />

      <img
        src="./images/MenuHamburguesa.png"
        alt=""
        class="Burger-Menu"
        @click="abrirMenu"
      />
    </div>
  </nav>
  <ul :class="className">
    <li class="li">
      <p class="li-Nombre"></p>
      Home
    </li>
    <li class="li">
      <p class="li-Nombre"></p>
      LogIn
    </li>
    <li class="li">
      <p class="li-Nombre"></p>
      Carrito
    </li>
    <li class="li">
      <p class="li-Nombre"></p>
      Pagar
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
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
  },
};
</script>

<style>
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

.Nav-Car {
  align-self: center;
}

.Nav-Logo {
  align-self: center;
  width: 184.28px;
  height: 33px;
}

.checkbtn {
  cursor: pointer;
  float: right;
  line-height: 80px;
}

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
  font-weight: 800;
  display: block;
  height: 50px;
  font-size: 20px;
  border-bottom: solid black 2px;
}

.li-Nombre:hover {
  color: slateblue;
}

.ulActivo {
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  text-decoration: none;
  position: fixed;
  width: 200px;
  height: 100vh;
  background: silver;
  top: 4rem;
  left: 0;
  text-align: center;
  transition: all 0.5s;
}

#check:checked ~ ul {
  left: 0;
}
</style>