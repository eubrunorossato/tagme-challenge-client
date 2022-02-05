import { Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';
import { VscKey } from 'react-icons/vsc';
import Tooltip from './tooltip/index';
import './index.css';

export default function LoginPage() {
  return (
    <div className="background">
      <div className="box">
        <Tooltip />
        <div className="coco-bambu-logo">
          <img src="/img/logo-coco-bambu.png" alt="" />
        </div>
        <div className="content-box">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaUserAlt color="black" />}
            />
            <Input type="tel" placeholder="Nome do usuário" size="lg" />
          </InputGroup>
        </div>

        <div className="content-box">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<VscKey color="black" />}
            />
            <Input placeholder="Senha" size="lg" />
          </InputGroup>
        </div>
        <div className="content-box">
          <Button colorScheme="orange">Acessar</Button>
        </div>
      </div>
    </div>
  );
}
