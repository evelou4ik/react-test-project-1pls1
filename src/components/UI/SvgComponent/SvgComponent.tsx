import React from 'react';

interface Props {
  svgComponent: React.ReactNode;
}

const SvgComponent = (props: Props) => {
  return <React.Fragment>{props.svgComponent}</React.Fragment>;
};

export default SvgComponent;
