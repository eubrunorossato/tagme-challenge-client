import './index.css';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import { GiCook } from 'react-icons/gi';
import { BsNewspaper } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { axios } from '../../utils/index';

export default function Navbar(props) {
  async function logOut() {
    await axios.get('/logout');
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <div className="navbar-box">
      <div className="logo-box">
        <img src="/img/logo-coco-bambu-mini.png" alt="" />
      </div>
      <div className="search-box">
        <InputGroup>
          <Input
            placeholder="Buscar Receita"
            value={props.value}
            onChange={props.onChange}
          />
          <InputRightElement children={<BiSearchAlt color="green.500" />} />
        </InputGroup>
      </div>
      <div className="icon-box">
        <div>
          <GiCook />
        </div>
        <div>
          <BsNewspaper />
        </div>
        <div style={{ cursor: 'Pointer' }} onClick={() => logOut()}>
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
}
