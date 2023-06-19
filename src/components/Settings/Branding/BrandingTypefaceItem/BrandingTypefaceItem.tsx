import React from 'react';

interface Props {
  title: string;
  fontFamily: string;
  className: string;
}

const BrandingTypefaceItem = (props: Props) => {
  const { title, fontFamily, className } = props;

  const fontFamilyChecker = () => {
    const element = document.body;
    const computedStyles = window.getComputedStyle(element);

    return computedStyles.fontFamily;
  };

  return (
    <span
      className={className}
      style={{
        fontFamily: `${fontFamily ? fontFamily : 'inherit'}`
      }}>
      {`${title}: ${fontFamily ? fontFamily : fontFamilyChecker()}`}
    </span>
  );
};

export default BrandingTypefaceItem;
