import { Checkbox } from '@chakra-ui/react';
import './index.css';
export default function Recipe() {
  return (
    <>
      <div className="recipe-img-box">
        <img src="/img/prato-bobo-grande.jpg" alt="" />
        <div className="details-box">
          <div>
            <h1>Bobo de camarão</h1>
            <p>
              Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
              pimentões e cebola juliene, temperos e um leve toque de açafrão.
              Servidos na paellera. Rico em sabor e apresentação.
            </p>
          </div>
        </div>
      </div>
      <div className="ingredients-box">
        <p>Ingredientes</p>
        <Checkbox colorScheme="green" defaultIsChecked={false}>
          Step 1
        </Checkbox>
        <Checkbox colorScheme="green" defaultIsChecked>
          Step 2
        </Checkbox>
        <Checkbox colorScheme="green" defaultIsChecked>
          Step 3
        </Checkbox>
      </div>
    </>
  );
}
