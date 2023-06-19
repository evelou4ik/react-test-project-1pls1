import React from 'react';
import classesSettingPage from '../SettingPage/SettingPage.module.css';
import { ReactComponent as TooltipIcon } from '../../../assets/tooltip-icon.svg';

interface Props {
  title: string;
  tooltipText: string;
  description: string;
}

const SettingsInfo = (props: Props) => {
  const { title, tooltipText, description } = props;

  return (
    <React.Fragment>
      <div className={classesSettingPage['title-wrap']}>
        <h3 className={classesSettingPage.subtitle}>{title}</h3>
        <span className={classesSettingPage['tooltip-icon']}>
          <TooltipIcon />
          <i className={classesSettingPage['tooltip-content']}>{tooltipText}</i>
        </span>
      </div>
      <p className={`${classesSettingPage.text}`}>{description}</p>
    </React.Fragment>
  );
};

export default SettingsInfo;
