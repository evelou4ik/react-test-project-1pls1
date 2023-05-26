import React, { useState } from 'react';
import classes from './SinglePalette.module.css';
import { SketchPicker } from 'react-color';

interface Props {
  type: string;
  color: string;
  onModifyColor: (color: any) => void;
}

const SinglePalette = (props: Props) => {
  const [color, setColor] = useState<null | any>(props.color ?? null);
  const [scratchIsOpened, setScratchIsOpened] = useState(false);

  const changeColorHandler = (color: any) => {
    setColor(color);
  };

  const closeColorSketch = () => {
    setScratchIsOpened(false);

    if (color) {
      props.onModifyColor(color);
    }
  };

  const rgbReg = color && `RGB: ${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`;

  return (
    <div className={classes['palette-uploader']}>
      <div className={classes['palette-action']}>
        <div className={classes['palette-color']} onClick={() => setScratchIsOpened(true)}>
          <span className={classes['palette-upload-btn']}></span>
          <span
            className={classes['palette-upload-result']}
            style={{ backgroundColor: color ? color.hex : 'transparent' }}></span>
        </div>
        <span className={`${classes['palette-type']} ${classes['palette-text']}`}>
          {props.type}
        </span>
        {scratchIsOpened && (
          <div className={classes.picker}>
            <div>
              <button className={classes['picker-close-btn']} onClick={closeColorSketch}>
                Close
              </button>
            </div>
            <SketchPicker
              color={color ? color.hex : '#fff'}
              className={classes.sketch}
              onChange={changeColorHandler}
            />
          </div>
        )}
      </div>
      <div className={classes['palette-text-wrap']}>
        {color && <span className={classes['palette-text']}>{color.hex.toUpperCase()}</span>}
        {color && <span className={classes['palette-text']}>{rgbReg}</span>}
        <p className={classes['palette-text']}>
          {`This color will affect [${props.type.toLowerCase()}] and [${props.type.toLowerCase()}]`}
        </p>
      </div>
    </div>
  );
};

export default SinglePalette;
