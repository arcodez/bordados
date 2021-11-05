import React from "react";
import { Layout as div } from "../../Layout";

const PaymentPage = () => {
  return (
    <div className="payment-page container">
      <div className="client-information">Informacion del cliente </div>
      <div className="order-total">Titulo, resumen y total de la facturas</div>
      <div className="payment-buttons">Botones de pago</div>
    </div>
  );
};

export default PaymentPage;
