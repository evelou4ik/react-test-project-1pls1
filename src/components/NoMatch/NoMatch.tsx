import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal/Modal';

import classesModal from '../UI/Modal/Modal.module.css';

const NoMatch = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const navigation = useNavigate();

  const closeModalHandler = (): void => {
    setModalIsOpen(false);
    navigation(-1);
  };

  useEffect(() => {
    if (location.pathname === '/*') {
      setModalIsOpen(true);
    }
  }, []);

  return (
    <React.Fragment>
      {modalIsOpen && (
        <Modal className={`${classesModal.modal}`} onClose={closeModalHandler}>
          <h2 className={classesModal.heading}>Coming soon...</h2>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default NoMatch;
