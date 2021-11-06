import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

const PaypalClientId =
  "AaYup7br6zIAPSN_UZWfEa030P8uFnsI6Y1lHwIQAyhR7QNat5URgFc5bGDBIdmIN2DE4QXmug1fqGvZ";

const PaymentPage = () => {
  const [amount, setAmount] = useState(10000);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://www.paypal.com/sdk/js?client-id=" + PaypalClientId;
      script.async = true;

      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);
    };
    addPaypalScript();
  }, []);

  return (
    <div className="payment-page container">
      <h2>Pagar</h2>

      <div className="client-information">
        <div className="direction">
          <h3>Formulario para las direcciones</h3>
        </div>

        <div className="order-details">
          <h3>Detalles del pedido</h3>
        </div>
      </div>

      <div className="order-total">
        <h3>Resume</h3>

        <div className="amounts">
          <div className="price-normal"> Original Price: 19,99$</div>
          <div className="total">Total: 19,99$</div>
        </div>

        <div className="conditions">
          Al comprar aceptas las normas Y condiciones
        </div>

        <div className="payment-buttons">
          <div className="paypal-button">
            {scriptLoaded && (
              <PayPalButton
                onSuccess={(details, data) => {
                  console.log(
                    "Thanks bro, for the pay" + details.payer.name.given_name
                  );
                  console.log(data);
                }}
                onError={(err) => {
                  console.log("No tienes money we desde el error");
                  console.log(err);
                }}
                amount={amount}
              />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .paypal-button {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default PaymentPage;
