<template>
  <div id="container">
    <input type="text" class="form-control" />
    <div id="paypal-button"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    paypal.Button.render(
      {
        env: "sandbox",
        client: {
          sandbox:
            "ARQ-WKAkFn3g4C111Ud3lLaUAfzagvJ_pmkLKBVMASvv6nyjX3fv3j0gtBdJEDhRPznYP9sLtf9oiJfH",
          production:
            "EFNo9sAyqiOmnlRHsAdXiGBf6ULysEIfKUVsn58Pq6ilfGHVFn03iVvbWtfiht-irdJD_df1MECvmBC2",
        },

        locale: "en_US",
        style: {
          size: "medium",
          color: "gold",
          shape: "pill",
        },

        commit: true,

        payment: function (data, actions) {
          return actions.payment.create({
            transactions: [
              {
                amount: {
                  total: "11",
                  currency: "USD",
                },
              },
            ],
          });
        },

        onAuthorize: function (data, actions) {
          return actions.payment.execute().then(function () {
            window.alert("Thank you for your purchase!");
          });
        },
      },
      "#paypal-button"
    );

    console.log("notification mounted");
  },
};
</script>