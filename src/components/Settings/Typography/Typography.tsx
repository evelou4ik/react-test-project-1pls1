import React from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { modifyUsedTypefaces, setSaveIsDisabled } from '../../store/settingsSlice';

import SettingPage from '../../UI/SettingPage/SettingPage';
import ExampleTypographies from './ExampleTypographies/ExampleTypographies';
import Typefaces from './Typefaces/Typefaces';

const Typography = () => {
  const dispatch = useAppDispatch();

  const saveUsedTypefaces = () => {
    dispatch(modifyUsedTypefaces());
    dispatch(setSaveIsDisabled(true));
  };

  return (
    <SettingPage title="Typography" saveChanges={saveUsedTypefaces}>
      <Typefaces />
      <ExampleTypographies />
    </SettingPage>
  );
};

export default Typography;
