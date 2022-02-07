import { Checkbox, Progress, Button } from '@chakra-ui/react';
import './index.css';
export default function Recipe() {
  return (
    <>
      <div className="recipe-img-box">
        <img src="/img/prato-bobo-grande.jpg" alt="" />
        <div className="details-box">
          <h1>Bobo de camarão</h1>
          <p>
            Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
            pimentões e cebola juliene, temperos e um leve toque de açafrão.
            Servidos na paellera. Rico em sabor e apresentação.
          </p>
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
      <div className="steps-box">
        <h1>Modo de Preparo</h1>
        <div className="steps">
          <Checkbox colorScheme="green" defaultIsChecked={false}>
            <p>Passo 1</p>
            Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
            pimentões e cebola juliene, temperos e um leve toque de açafrão.
            Servidos na paellera. Rico em sabor e apresentação.
          </Checkbox>
          <Checkbox colorScheme="green" defaultIsChecked={false}>
            <p>Passo 1</p>
            Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
            pimentões e cebola juliene, temperos e um leve toque de açafrão.
            Servidos na paellera. Rico em sabor e apresentação.
          </Checkbox>
          <Checkbox colorScheme="green" defaultIsChecked={false}>
            <p>Passo 1</p>
            Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
            pimentões e cebola juliene, temperos e um leve toque de açafrão.
            Servidos na paellera. Rico em sabor e apresentação.
          </Checkbox>
          <Checkbox colorScheme="green" defaultIsChecked={false}>
            <p>Passo 1</p>
            Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
            pimentões e cebola juliene, temperos e um leve toque de açafrão.
            Servidos na paellera. Rico em sabor e apresentação.
          </Checkbox>
          <Checkbox colorScheme="green" defaultIsChecked={false}>
            <p>Passo 1</p>
            Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
            pimentões e cebola juliene, temperos e um leve toque de açafrão.
            Servidos na paellera. Rico em sabor e apresentação.
          </Checkbox>
          <Checkbox colorScheme="green" defaultIsChecked={false}>
            <p>Passo 1</p>
            Arroz com camarão, lula, peixe, lagosta, e mexilhão, refogado com
            pimentões e cebola juliene, temperos e um leve toque de açafrão.
            Servidos na paellera. Rico em sabor e apresentação.
          </Checkbox>
        </div>
      </div>
      <div className="footer-box">
        <div className="progress-box">
          <div>
            <p>
              Status <span>O%</span> pronto e 0 minutos utilizados
            </p>
            <Progress value={80} colorScheme="orange" />
          </div>
          <Button colorScheme="orange">Iniciar Preparação</Button>
        </div>
      </div>
    </>
  );
}
