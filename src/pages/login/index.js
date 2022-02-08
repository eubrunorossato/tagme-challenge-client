import { useState } from 'react';
import { Input, Button, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';
import { VscKey } from 'react-icons/vsc';
import { Buffer } from 'buffer';
import Tooltip from './tooltip/index';
import axios from 'axios';
import './index.css';

export default function LoginPage() {
  function setObj(param, value) {
    setUserObject({ ...userObj, [param]: value });
  }

  async function login() {
    const token = Buffer.from(
      `${userObj.user}:${userObj.password}`,
      'utf8'
    ).toString('base64');
    const { status, data } = await axios.post(
      'https://localhost:3000/user-auth',
      {},
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );
    if (status === 500) return;
    else localStorage.setItem('user', data.user);
    window.location.href = '/';
  }

  const [userObj, setUserObject] = useState({ user: '', password: '' });
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
            <Input
              type="tel"
              placeholder="Nome do usuário"
              size="lg"
              onChange={e => {
                setObj('user', e.target.value);
              }}
            />
          </InputGroup>
        </div>
        <div className="content-box">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<VscKey color="black" />}
            />
            <Input
              placeholder="Senha"
              size="lg"
              onChange={e => {
                setObj('password', e.target.value);
              }}
            />
          </InputGroup>
        </div>
        <div className="content-box">
          <Button colorScheme="orange" onClick={() => login()}>
            Acessar
          </Button>
        </div>
      </div>
    </div>
  );
}
