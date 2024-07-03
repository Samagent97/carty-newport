import React from "react";
import { Avatar, AvatarProps as MTWAvatarProps } from "@material-tailwind/react";

type AvatarProps = Omit<MTWAvatarProps, 'placeholder' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'> & {
  placeholder?: string;
  onPointerEnterCapture?: React.PointerEventHandler;
  onPointerLeaveCapture?: React.PointerEventHandler;
};

const CustomAvatar: React.FC<AvatarProps> = (props) => {
  return (
    <Avatar
      {...props}
      placeholder={props.placeholder || ''}
      onPointerEnterCapture={props.onPointerEnterCapture || (() => {})}
      onPointerLeaveCapture={props.onPointerLeaveCapture || (() => {})}
    >
      {props.children}
    </Avatar>
  );
};

export default CustomAvatar;
