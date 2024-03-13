import "./ImcCalc.css";

const ImcCalc = () => {
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
            />
          </div>

          <div className="form-control">
            <label htmlFor="height">Peso:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 70,5"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;