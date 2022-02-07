import './index.css';
import Navbar from '../../components/navbar';
export default function Main() {
  return (
    <>
      <Navbar />
      <div className="main-box-orders">
        <div className="orders-content">
          <div className="recipe-picture-box">
            <img src="/img/prato-bobo-peq.jpg" alt="" />
          </div>
          <div className="recipe-box">
            <div className="recipe-title">
              <p>This is the recipe Title</p>
            </div>
            <div className="recipe-description">
              <p>
                Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado
                com pimentões e cebola juliene, temperos e um leve toque de
                açafrão. Servidos na paellera. Rico em sabor e apresentação.
              </p>
            </div>
          </div>
          <div className="status-box">
            <p>Pedido Finalizado</p>
          </div>
          <div className="circles-box">
            <div className="order-asked"></div>
            <div className="show-recipe"></div>
          </div>
        </div>
      </div>
    </>
  );
}
