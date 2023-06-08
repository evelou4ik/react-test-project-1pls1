import React from 'react';
import classes from './ExampleTypographies.module.css';
import classesSettingPage from '../../../UI/SettingPage/SettingPage.module.css';
import { useAppSelector } from '../../../hooks/hooks';
import '../../../../fonts/fonts.css';
const ExampleTypographies = () => {
  const { typefaces } = useAppSelector((state) => state.settings);
  return (
    <div className={`${classesSettingPage['content-wrap']}`}>
      <h3 className={classesSettingPage.subtitle}>Example type pairings</h3>
      <span
        className={classes['heading']}
        style={{
          fontFamily: `${typefaces.headerFont ? typefaces.headerFont : 'inherit'}`
        }}>
        Article Heading
      </span>
      <span
        className={classes['subheading']}
        style={{
          fontFamily: `${typefaces.subHeaderFont ? typefaces.subHeaderFont : 'inherit'}`
        }}>
        Article Subheading goes here
      </span>
      <p
        className={classes['body-copy']}
        style={{
          fontFamily: `${typefaces.bodyCopyFont ? typefaces.bodyCopyFont : 'inherit'}`
        }}>
        Body copy: Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget
        eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.
      </p>
      <span className={classes.separator}></span>
      <span
        className={classes['heading']}
        style={{
          fontFamily: `${typefaces.headerFont ? typefaces.headerFont : 'inherit'}`
        }}>
        Article Heading
      </span>
      <p
        className={classes['body-copy']}
        style={{
          fontFamily: `${typefaces.bodyCopyFont ? typefaces.bodyCopyFont : 'inherit'}`
        }}>
        Body copy: Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget
        eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.
      </p>
      <span className={classes.separator}></span>
      <span
        className={classes['subheading']}
        style={{
          fontFamily: `${typefaces.subHeaderFont ? typefaces.subHeaderFont : 'inherit'}`
        }}>
        Article Subheading goes here
      </span>
      <p
        className={classes['body-copy']}
        style={{
          fontFamily: `${typefaces.bodyCopyFont ? typefaces.bodyCopyFont : 'inherit'}`
        }}>
        Body copy: Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget
        eget neque, posuere quis placerat arcu. Ipsum est felis varius faucibus praesent convallis.
      </p>
    </div>
  );
};

export default ExampleTypographies;
