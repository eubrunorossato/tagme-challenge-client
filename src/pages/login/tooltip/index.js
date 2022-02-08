import './index.css';
import { useEffect, useState } from 'react';
import { axios } from '../../../utils/index';
export default function Tooltip() {
  const [counter, setCounter] = useState('0');
  useEffect(() => {
    async function getNewOrders() {
      const { data } = await axios.get('/order-get-new');
      setCounter(data.counter);
    }
    getNewOrders();
  }, []);
  return (
    <div className="main-box">
      <div className="box-tooltip-content">
        <div className="new-orders">
          <p className="counter">{counter}</p>
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
