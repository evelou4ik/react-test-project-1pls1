import React from 'react';

import classes from './SettingPage.module.css';
import { useAppSelector } from '../../hooks/hooks';

interface Props {
  title: string;
  saveChanges: () => void;
  children: React.ReactNode;
}

const SettingPage = (props: Props) => {
  const { saveIsDisabled, usedPalette, usedTypefaces } = useAppSelector((state) => state.settings);
  const { title, children, saveChanges } = props;

  return (
    <div className={classes.content}>
      <div className={classes.top}>
        <h2
          className={classes.title}
          style={{
            fontFamily: `${usedTypefaces?.headerFont ? usedTypefaces.headerFont : 'inherit'}`
          }}>
          {title}
        </h2>
        <button
          className={`${classes['btn-save']} ${saveIsDisabled ? classes.disabled : ''} `}
          type="button"
          onClick={saveChanges}
          disabled={saveIsDisabled}
          style={{ backgroundColor: usedPalette ? `${usedPalette.colorAccent.hex}` : '' }}>
          Save Changes
        </button>
      </div>
      <div className={classes.main}>{children}</div>
    </div>
  );
};

export default SettingPage;
