import React from 'react';

import { Button, ButtonProps as MTWButtonProps } from '@material-tailwind/react';

type ButtonProps = Omit<MTWButtonProps, 'placeholder' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'> & {
  placeholder?: string;
  onPointerEnterCapture?: React.PointerEventHandler;
  onPointerLeaveCapture?: React.PointerEventHandler;
};

const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      {...props}
      placeholder={props.placeholder || ''}
      onPointerEnterCapture={props.onPointerEnterCapture || (() => {})}
      onPointerLeaveCapture={props.onPointerLeaveCapture || (() => {})}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
