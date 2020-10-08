import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HWcuXI95jqMwnAChaegXWpKUAisNp25QoGmdHghE4AHaN2zp05w8tATYnRGQRDKEJPOuU1pzJXqKnkqk3sI2Zxw00AYcCbZFI';

  const onToken = (token) => {
    axios({
      url: 'http://localhost:5000/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        alert('There was an issue with the payment.');
      });
  };

  return (
    <StripeCheckout
      name="Markers Clothing"
      description={`Your total is $.${price}`}
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
