import React from "react";
import { Card,CardProps as MTWCardProps } from "@material-tailwind/react";

type CardProps = Omit<MTWCardProps, 'placeholder' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'> & {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler;
    onPointerLeaveCapture?: React.PointerEventHandler;
  };
  
  const CustomCard: React.FC<CardProps> = (props) => {
    return (
      <Card
        {...props}
        placeholder={props.placeholder || ''}
        onPointerEnterCapture={props.onPointerEnterCapture || (() => {})}
        onPointerLeaveCapture={props.onPointerLeaveCapture || (() => {})}
      >
        {props.children}
      </Card>
    );
  };
  
  export default CustomCard;

