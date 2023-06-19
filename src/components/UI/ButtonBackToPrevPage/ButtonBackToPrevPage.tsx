import React from 'react';
import classesMenu from '../../Settings/SettingsSidebar/SettingsSidebar.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
}

const ButtonBackToPrevPage = ({ title }: Props) => {
  const navigation = useNavigate();

  const handlePreviousPage = (): void => {
    navigation(-1);
  };

  return (
    <a
      className={`${classesMenu.link} ${classesMenu['return-link']}`}
      href="#"
      onClick={handlePreviousPage}>
      {title}
    </a>
  );
};

export default ButtonBackToPrevPage;
