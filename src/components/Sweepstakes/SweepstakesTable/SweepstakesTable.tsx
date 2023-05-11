import React, { useState, useRef } from 'react';

import SweepstakesTableBody from './SweepstakesTableBody';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

import classes from './SweepstakesTable.module.css';
import classesButton from '../../UI/Button/Button.module.css';
import classesModal from '../../UI/Modal/Modal.module.css';

const LINK_SAVE_TIME = 1000;

const SweepstakesTable = () => {
  const [isPromoteModalOpen, setIsPromoteModalOpen] = useState(false);
  const [isLinkSaved, setIsLinkSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState('');
  const linkRef = useRef<any>('');

  const handleCopyClick = () => {
    const text = linkRef.current.innerText;

    navigator.clipboard.writeText(text);

    setIsLinkSaved(true);

    setTimeout(() => {
      setIsPromoteModalOpen(false);
      setIsLinkSaved(false);
    }, LINK_SAVE_TIME);
  };

  const openPromoteModalHandler = (link: string) => {
    setIsPromoteModalOpen(true);
    setCopiedLink(link);
  };

  const closePromoteModalHandler = () => {
    setIsPromoteModalOpen(false);
  };

  return (
    <div className={classes['cart-wrapper']}>
      <SweepstakesTableBody onShowModal={openPromoteModalHandler} />
      {isPromoteModalOpen && (
        <Modal className={`${classesModal.modal}`} onClose={closePromoteModalHandler}>
          <h2 className={`${classesModal.heading} ${classes['heading--promote']}`}>Public shareable link</h2>
          <div className={classes['url-text']}>
            <a href={`${copiedLink}`} ref={linkRef} target='_blank' rel='noopener noreferrer'>{copiedLink}</a>
          </div>
          <div className={classesModal['modal-actions']}>
            <Button
              type='button'
              onClick={closePromoteModalHandler}
              className=
                {`
                  ${classesButton.button} 
                  ${classes['sweepstake-btn']} 
                  ${classes['sweepstake-btn--promote']} 
                  ${classesModal.cancel}
                `}
            >
              Cancel
            </Button>
            <Button
              type='button'
              onClick={() => handleCopyClick()}
              className=
                {`
                  ${classesButton.button} 
                  ${classes['sweepstake-btn']} 
                  ${classes['sweepstake-btn--promote']} 
                  ${isLinkSaved ? classesModal.saved : classesModal.accept}
                `}
            >
              {isLinkSaved ? 'Saved!' : 'Copy link'}
            </Button>
          </div>
        </Modal>
      )}

    </div>
  );
};

export default SweepstakesTable;
