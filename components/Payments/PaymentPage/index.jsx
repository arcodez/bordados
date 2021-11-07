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
      <div className="client-information">
        <h2>Pagar</h2>
        <div className="direction">
          <h3>Formulario para las direcciones</h3>
          <form action="">
            <div className="form-group">
              <label htmlFor="">Estado</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Municipio</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Ciudad</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Direccion</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Dirección 2</label>
              <input type="text" className="form-control" />
            </div>
          </form>
        </div>

        <div className="order-details">
          <h3>Detalles del pedido</h3>

          <div className="order-details-item">
            <h4>Producto</h4>
            <p>Nombre del producto Lorem ipsum dolor</p>
            <p>$10.000</p>
          </div>
        </div>
      </div>

      <div className="order-total">
        <h3>Resume</h3>

        <div className="amounts">
          <div className="price-normal">
            <p>Original Price:</p> <span>19,99$</span>
          </div>

          <div className="total">
            <p>Total:</p> <span>19,99$</span>
          </div>
        </div>

        <div className="conditions">
          <p>Al comprar aceptas las normas Y condiciones</p>
        </div>

        <div className="payment-buttons">
          <div className="paypal-button">
            {scriptLoaded ? (
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
            ) : (
              <p style={{ textAlign: "center" }}>Loading Paypal Button</p>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        h2 {
          font-size: 2rem;
        }
        .payment-page {
          display: grid;
          grid-template-columns: 3fr 1fr;
        }
        .paypal-button {
          width: 100%;
        }

        .price-normal,
        .total {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .price-normal {
          border-bottom: 1px solid #e6e6e6;
        }

        .total {
          font-weight: bold;
        }

        span {
          font-weight: bold;
        }
        .conditions {
          font-size: 0.8rem;
          text-align: center;
        }
        .order-details-item {
          /* background: var(--noche-clarac); */
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default PaymentPage;
