import './index.css';
export default function Tooltip() {
  return (
    <div className="main-box">
      <div className="box-tooltip-content">
        <div className="new-orders">
          <p className="counter">1</p>
          <p className="novo-pedido">Novo pedido</p>
        </div>
        <div className="fixed-text">
          <p>
            Por favor, faça login para ter acesso a receita e ao modo de
            preparo.
          </p>
        </div>
      </div>
      <div className="box-arrow">
        <i className="arrow down"></i>
      </div>
    </div>
  );
}
