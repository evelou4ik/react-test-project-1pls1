import React from 'react';
import classes from '../Branding.module.css';
import ActionBox from '../../../UI/ActionBox/ActionBox';

interface Props {
  title: string;
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  classNameActionBox?: string;
  isVisibleActionBox: boolean;
  linkHref: string;
  linkText: string;
}

const BrandingItem = (props: Props) => {
  const { title, onClick, children, classNameActionBox, isVisibleActionBox, linkHref, linkText } =
    props;

  return (
    <div className={classes['organization-wrap']}>
      <h3 className={classes.title}>{title}</h3>
      {children}
      <div className={classes['organization-action']}>
        {isVisibleActionBox && <ActionBox classes={classNameActionBox} />}
        <a className={classes.link} href={linkHref} onClick={onClick}>
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default BrandingItem;
