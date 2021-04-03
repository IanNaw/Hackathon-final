<template>
  <div class="container">
    <paypal :amount="amount"></paypal>
  </div>
</template>
<script>
import Paypal from "../components/PayPal.vue";
export default {
  name: "Pago",
  data() {
    return {
      amount: 10,
    };
  },
  components: {
    paypal: Paypal,
  },
};
</script>