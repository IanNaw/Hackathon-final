<template>
  <div>
    <div id="paypal-button-container"></div>
    <div v-if="success" class="alert alert-success">
      <strong>Success!</strong> Payment successfuly done
    </div>
    <div v-if="error" class="alert alert-danger">
      <strong>Ooops!</strong> something went wrong
    </div>
  </div>
</template>

<script>
let client = {
  sandbox:
    "AVGYjsvVnzLVUJH7_sVhcvJtKf0PfkBsHw-s5Yy5ZBlB8iF8K_J30N_IFomPOluVlQYRMVOZhvTqsyWT",
};
let payment = (data, actions) => {
  // Make a call to the REST api to create the payment
  return actions.payment.create({
    payment: {
      transactions: [
        {
          amount: { total: this.amount, currency: "USD" },
        },
      ],
    },
  });
};
let onAuthorize = (data) => {
  var data = {
    paymentID: data.paymentID,
    payerID: data.payerID,
    amount: this.amount,
  };
  this.sendDataPaypal({ data: data })
    .then(() => {
      this.success = true; // to display the success message
    })
    .catch((err) => {
      this.error = true; // to display  the error message
    });
};
paypal.Button.render(
  {
    env: "sandbox", // sandbox | production
    commit: true,
    client,
    payment,
    onAuthorize,
  },
  "#paypal-button-container"
);

// export default {
//   name: "Paypal",
//   methods: {
//     sendDataPaypal = async function(data) {
//       return await fetch('http://localhost:8080/checkoutpaypal', {
//           method: "POST",
//           body: JSON.stringify(data),
//           headers: {
//             "Content-Type": "application/json",
//           }
//         })
//     }
//   },
// };
</script>
