<template>
  <div id="container">
    <paypal-buttons
      [props]="{
          createOrder: createOrder,
          onApprove: onApprove
      }"
    ></paypal-buttons>
  </div>
</template>

<script>
const PayPalButton = paypal.Buttons.driver("vue", window.Vue);

Vue.component("app", {
  components: {
    "paypal-buttons": PayPalButton,
  },

  computed: {
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: "0.01",
            },
          },
        ],
      });
    },
    onAuthorize: function (data, actions) {
      return actions.order.capture();
    },
  },
});

var vm = new Vue({
  el: "#container",
});
</script>