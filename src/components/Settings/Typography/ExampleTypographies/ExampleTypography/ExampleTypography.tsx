import React from 'react';
import { getTypefaceFromTypographiesOrDefault } from '../../../../helpers/helpers';

import classes from './ExampleTypography.module.css';
import ExampleTypographyItem from './ExampleTypographyItem/ExampleTypographyItem';
import { useAppSelector } from '../../../../hooks/hooks';

interface Props {
  includeHeading: boolean;
  includeSubHeading: boolean;
}

const ExampleTypography = ({ includeHeading, includeSubHeading }: Props) => {
  const { typefaces } = useAppSelector((state) => state.settings);

  return (
    <React.Fragment>
      {includeHeading && (
        <ExampleTypographyItem
          classes={classes['heading']}
          font={getTypefaceFromTypographiesOrDefault(typefaces, typefaces.headerFont)}
          title="Article Heading"
        />
      )}
      {includeSubHeading && (
        <ExampleTypographyItem
          classes={classes['subheading']}
          font={getTypefaceFromTypographiesOrDefault(typefaces, typefaces.subHeaderFont)}
          title="Article Subheading goes here"
        />
      )}
      <ExampleTypographyItem
        classes={classes['body-copy']}
        font={getTypefaceFromTypographiesOrDefault(typefaces, typefaces.bodyCopyFont)}
        title="Body copy: Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget
        eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis."
      />
    </React.Fragment>
  );
};

export default ExampleTypography;
