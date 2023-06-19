import React from 'react';
import classes from './BrandingOrganizationTemplate.module.css';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const BrandingOrganizationTemplate = (props: Props) => {
  const { title, children } = props;

  return (
    <div className={classes['organization-template']}>
      <span className={classes['template-title']}>{title}</span>
      {children}
    </div>
  );
};

export default BrandingOrganizationTemplate;
