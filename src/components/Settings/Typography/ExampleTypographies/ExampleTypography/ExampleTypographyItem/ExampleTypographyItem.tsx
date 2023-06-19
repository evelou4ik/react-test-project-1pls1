import React from 'react';

interface Props {
  classes: string;
  font: string;
  title: string;
}
const ExampleTypographyItem = (props: Props) => {
  const { title, font, classes } = props;

  return (
    <div className={classes} style={{ fontFamily: font }}>
      {title}
    </div>
  );
};

export default ExampleTypographyItem;
