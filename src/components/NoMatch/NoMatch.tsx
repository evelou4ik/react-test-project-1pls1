import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';

import ButtonStyles from '../UI/Button/Button.module.css';

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
        <Modal onClose={closeModalHandler}>
          <h2>Coming soon...</h2>
          <Button
            className={`${ButtonStyles.button} ${ButtonStyles['button-close']}`}
            type="button"
            onClick={closeModalHandler}>
            <div>
              <span></span>
              <span></span>
            </div>
          </Button>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default NoMatch;
