import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import SelectHandler from '../../../UI/SelectHandler/SelectHandler';

import classesSettingPage from '../../../UI/SettingPage/SettingPage.module.css';

import {
  modifyHeaderTypeface,
  modifySubHeaderTypeface,
  modifyBodyCopyTypeface,
  setSaveIsDisabled
} from '../../../store/settingsSlice';
import SettingsInfo from '../../../UI/SettingsInfo/SettingsInfo';

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
      <SettingsInfo
        title="Typefaces, fonts"
        tooltipText="Fonts"
        description="Your organization’s typefaces live here and affect how your pages appear on the UncommonGood
        platform."
      />
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
