import './index.css';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import { GiCook } from 'react-icons/gi';
import { BsNewspaper } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
export default function Navbar() {
  return (
    <div className="navbar-box">
      <div className="logo-box">
        <img src="/img/logo-coco-bambu-mini.png" alt="" />
      </div>
      <div className="search-box">
        <InputGroup>
          <Input placeholder="Buscar Receita" />
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
        <div>
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
}
