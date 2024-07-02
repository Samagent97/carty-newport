import React from 'react';
import { CardBody, CardBodyProps as MTWCardBodyProps } from "@material-tailwind/react";


type CardBodyProps = Omit<MTWCardBodyProps, 'placeholder' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'> & {
  placeholder?: string;
  onPointerEnterCapture?: React.PointerEventHandler;
  onPointerLeaveCapture?: React.PointerEventHandler;
};

const CustomCardBody: React.FC<CardBodyProps> = (props) => {
  return (
    <CardBody
      {...props}
      placeholder={props.placeholder || ''}
      onPointerEnterCapture={props.onPointerEnterCapture || (() => {})}
      onPointerLeaveCapture={props.onPointerLeaveCapture || (() => {})}
    >
      {props.children}
    </CardBody>
  );
};

export default CustomCardBody;
