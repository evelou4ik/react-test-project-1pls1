import React, { useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { updateSelectedPost } from '../../store/sweepstakesSlice';

import SweepstakesTableBody from './SweepstakesTableBody';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

import classes from './SweepstakesTable.module.css';
import classesButton from '../../UI/Button/Button.module.css';
import classesModal from '../../UI/Modal/Modal.module.css';

const SweepstakesTable = () => {
  const [isPromoteModalOpen, setIsPromoteModalOpen] = useState(false);
  const [status, setStatus] = useState<null | string>(null);
  const [selectedCart, setSelectedCart] = useState<null | number>(null);
  const [isLinkSaved, setIsLinkSaved] = useState(false);
  const [copiedLink, setCopiedLink] = useState('');

  const linkRef = useRef<any>('');
  const { usedPalette } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const handleCopyClick = () => {
    const text = linkRef.current.innerText;

    navigator.clipboard.writeText(text);

    setIsLinkSaved(true);

    setTimeout(() => {
      setIsPromoteModalOpen(false);
      setIsLinkSaved(false);
    }, 1000);
  };

  const openPromoteModalHandler = (link: string) => {
    setIsPromoteModalOpen(true);
    setCopiedLink(link);
  };

  const closePromoteModalHandler = () => {
    setIsPromoteModalOpen(false);
  };

  const openSwitchStatusModalHandler = (action: string, id: number) => {
    if (action === 'accept') {
      setStatus('active');
    }
    if (action === 'decline') {
      setStatus('declined');
    }

    setSelectedCart(id);
  };

  const changeCartStatus = (status: string, id: number | null) => {
    dispatch(updateSelectedPost({ status, id }));

    setStatus(null);
  };

  const closeSwitchStatusModalHandler = () => {
    setStatus(null);
  };

  return (
    <div className={classes['cart-wrapper']}>
      <SweepstakesTableBody
        onShowPromoteModal={openPromoteModalHandler}
        onShowSwitchStatusModal={openSwitchStatusModalHandler}
      />
      {isPromoteModalOpen && (
        <Modal className={`${classesModal.modal}`} onClose={closePromoteModalHandler}>
          <h2 className={`${classesModal.heading} ${classes['heading--promote']}`}>
            Public shareable link
          </h2>
          <div className={classes['url-text']}>
            <a href={`${copiedLink}`} ref={linkRef} target="_blank" rel="noopener noreferrer">
              {copiedLink}
            </a>
          </div>
          <div className={classesModal['modal-actions']}>
            <Button
              type="button"
              onClick={closePromoteModalHandler}
              className={`
                  ${classesButton.button} 
                  ${classes['sweepstake-btn']} 
                  ${classesModal.cancel}
                `}>
              Cancel
            </Button>
            <button
              type="button"
              onClick={() => handleCopyClick()}
              className={`
                  ${classesButton.button} 
                  ${classes['sweepstake-btn']} 
                  ${isLinkSaved ? classesModal.saved : classesModal.accept}
                  ${classes['sweepstake-btn--copy-link']}
                `}
              style={{
                backgroundColor: usedPalette ? `${usedPalette.colorAccent.hex}` : '#EDBC33'
              }}>
              {isLinkSaved ? 'Saved!' : 'Copy link'}
            </button>
          </div>
        </Modal>
      )}
      {status && (
        <Modal className={`${classesModal.modal}`} onClose={closeSwitchStatusModalHandler}>
          <h2>Accept</h2>
          <p>
            Are you sure you want to accept this sweepstake? You can accept it when you’re ready.
          </p>
          <div className={classesModal['modal-actions']}>
            <Button
              type="button"
              className={`
                  ${classesButton.button} 
                  ${classes['sweepstake-btn']} 
                  ${classesModal.cancel}
                `}
              onClick={closeSwitchStatusModalHandler}>
              Cancel
            </Button>
            <button
              type="button"
              onClick={() => changeCartStatus(status, selectedCart)}
              className={`
                  ${classesButton.button} 
                  ${classes['sweepstake-btn']} 
                  ${classesModal.accept}
                  ${classes['sweepstake-btn--accept']}
                `}
              style={{
                backgroundColor: usedPalette ? `${usedPalette.colorAccent.hex}` : '#EDBC33'
              }}>
              Accept
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SweepstakesTable;
