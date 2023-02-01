import React from "react";
import PaystackButton from "react-paystack";

const PaystackPay = () => {
  const paystackOptions = {
    key: "pk_test_b298d476e79aa55787cdc691ef704bac014c6524",
    email: "adenikem@yahoo.com",
    amount: 10000,
    callback: (response) => {
      console.log(response);
    },
  };

  return (
    <PaystackButton
      {...paystackOptions}
      text="Make Payment"
      class="payButton"
    />
  );
};

export default PaystackPay;
