import React from 'react';
import { IconButton, IconButtonProps as MTWIconButtonProps } from '@material-tailwind/react';

// Extend the original IconButtonProps to make specific props optional
type IconButtonProps = Omit<MTWIconButtonProps, 'placeholder' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'> & {
  placeholder?: string;
  onPointerEnterCapture?: React.PointerEventHandler;
  onPointerLeaveCapture?: React.PointerEventHandler;
};

const CustomIconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <IconButton
      {...props}
      placeholder={props.placeholder || ''}
      onPointerEnterCapture={props.onPointerEnterCapture || (() => {})}
      onPointerLeaveCapture={props.onPointerLeaveCapture || (() => {})}
    >
      {props.children}
    </IconButton>
  );
};

export default CustomIconButton;
