import React, { useEffect } from 'react';

import SelectHandler from '../../../UI/SelectHandler/SelectHandler';

import classes from './Typefaces.module.css';
import classesSettingPage from '../../../UI/SettingPage/SettingPage.module.css';
import { ReactComponent as TooltipIcon } from '../../../../assets/tooltip-icon.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {
  modifyHeaderTypeface,
  modifySubHeaderTypeface,
  modifyBodyCopyTypeface,
  setSaveIsDisabled
} from '../../../store/settingsSlice';

const Typefaces = () => {
  const fonts = ['Arial', 'Arial Bold', 'Georgia', 'Comic Sans MS'];

  const { usedTypefaces, typefaces } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!usedTypefaces) {
        const typefacesIsValid = Boolean(
          typefaces.headerFont || typefaces.subHeaderFont || typefaces.bodyCopyFont
        );

        typefacesIsValid ? dispatch(setSaveIsDisabled(false)) : dispatch(setSaveIsDisabled(true));
      } else {
        const typefacesIsEqual = JSON.stringify(usedTypefaces) === JSON.stringify(typefaces);

        typefacesIsEqual ? dispatch(setSaveIsDisabled(true)) : dispatch(setSaveIsDisabled(false));
      }
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [typefaces]);

  return (
    <div className={`${classesSettingPage['content-wrap']}`}>
      <div className={classesSettingPage['title-wrap']}>
        <h3 className={classesSettingPage.subtitle}>Typefaces, fonts</h3>
        <span className={classesSettingPage['tooltip-icon']}>
          <TooltipIcon />
          <i className={classesSettingPage['tooltip-content']}>Fonts</i>
        </span>
      </div>
      <p className={`${classesSettingPage.text} ${classes.text}`}>
        Your organization’s typefaces live here and affect how your pages appear on the UncommonGood
        platform.
      </p>
      <SelectHandler
        title="Header"
        options={fonts}
        placeholder="Choose a typeface"
        selectOptionHandler={(opt) => dispatch(modifyHeaderTypeface(opt))}
        value="headerFont"
      />
      <SelectHandler
        title="Sub-Header"
        options={fonts}
        placeholder="Choose a typeface"
        selectOptionHandler={(opt) => dispatch(modifySubHeaderTypeface(opt))}
        value="subHeaderFont"
      />
      <SelectHandler
        title="Body Copy"
        options={fonts}
        placeholder="Choose a typeface"
        selectOptionHandler={(opt) => dispatch(modifyBodyCopyTypeface(opt))}
        value="bodyCopyFont"
      />
    </div>
  );
};

export default Typefaces;
