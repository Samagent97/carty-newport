import React from 'react';
import { Typography, TypographyProps as MTWTypographyProps } from "@material-tailwind/react";

// Extend the original TypographyProps to make specific props optional
type TypographyProps = Omit<MTWTypographyProps, 'placeholder' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'> & {
  placeholder?: string;
  onPointerEnterCapture?: React.PointerEventHandler;
  onPointerLeaveCapture?: React.PointerEventHandler;
};

const CustomTypography: React.FC<TypographyProps> = (props) => {
  return (
    <Typography
      {...props}
      placeholder={props.placeholder || ""}
      onPointerEnterCapture={props.onPointerEnterCapture || (() => {})}
      onPointerLeaveCapture={props.onPointerLeaveCapture || (() => {})}
    >
      {props.children}
    </Typography>
  );
};

export default CustomTypography;
