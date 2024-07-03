import React from "react";
import { CardHeader, CardHeaderProps as MTWCardHeaderProps } from "@material-tailwind/react";

type CardHeaderProps = Omit<MTWCardHeaderProps, 'placeholder' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'> & {
  placeholder?: string;
  onPointerEnterCapture?: React.PointerEventHandler;
  onPointerLeaveCapture?: React.PointerEventHandler;
};

const CustomCardHeader: React.FC<CardHeaderProps> = (props) => {
  return (
    <CardHeader
      {...props}
      placeholder={props.placeholder || ''}
      onPointerEnterCapture={props.onPointerEnterCapture || (() => {})}
      onPointerLeaveCapture={props.onPointerLeaveCapture || (() => {})}
    >
      {props.children}
    </CardHeader>
  );
};

export default CustomCardHeader;
