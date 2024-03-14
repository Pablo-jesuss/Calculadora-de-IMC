import { useState } from "react";

import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handeleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };

  const handeleWeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-input">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,75"
              onChange={(e) => handeleHeightChange(e)}
              value={height}
            />
          </div>

          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5"
              onChange={(e) => handeleWeightChange(e)}
              value={weight}
            />
          </div>

          <div className="action-control">
            <Button id="calc-btn" test="Calcular" action={calcImc} />
            <Button id="clear-btn" test="Limpar" action={clearForm} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
