import { Button } from '@chakra-ui/react';
import Modal from 'react-modal';
import './index.css';
export default function ModalComponent(props) {
  return (
    <Modal isOpen={props.modalOpen} contentLabel="Example Modal">
      <div className="main-box-modal ">
        <p>{props.text}</p>
        <div className="button-modal-box">
          <Button
            colorScheme="green"
            defaultIsChecked={false}
            style={{
              width: '80%',
              backgroundColor: 'white',
              border: '2px solid black',
              color: 'Black',
            }}
            onClick={() => props.closeModal}
          >
            {props.buttonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
