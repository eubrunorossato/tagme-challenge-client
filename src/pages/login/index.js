import {
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';
import { VscKey } from 'react-icons/vsc';

import './index.css';
export default function LoginPage() {
  return (
    <div className="background">
      <div className="box">
        <div className="coco-bambu-logo">
          <img src="/img/logo-coco-bambu.png" alt="" />
        </div>
        <div>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FaUserAlt color="black" />}
              />
              <Input type="tel" placeholder="Nome do usuário" size="lg" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<VscKey color="black" />}
              />
              <Input placeholder="Senha" size="lg" />
            </InputGroup>
          </Stack>
        </div>
        <div className="button-div">
          <Button colorScheme="orange">Acessar</Button>
        </div>
      </div>
    </div>
  );
}
