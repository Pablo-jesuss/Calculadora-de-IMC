import "./ImcTable.css";

const ImcTable = ({ data }) => {
  return (
    <div id="result-container">
      <p id="imc-number">Seu Imc:</p>
      <p id="imc-info">Situação atual</p>
      <h3>Confira as classificações</h3>
      <div id="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obesidade</h4>
        </div>
      </div>
    </div>
  );
};

export default ImcTable;
