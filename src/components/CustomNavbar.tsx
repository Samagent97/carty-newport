import React from "react";
import { Navbar, NavbarProps as MTWNavbarProps } from "@material-tailwind/react";

type NavbarProps = Omit<MTWNavbarProps, 'placeholder' | 'onPointerEnterCapture' | 'onPointerLeaveCapture'> & {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler;
    onPointerLeaveCapture?: React.PointerEventHandler;
};

const CustomNavbar: React.FC<NavbarProps> = (props) => {
    return (
        <Navbar
            {...props}
            placeholder={props.placeholder || ''}
            onPointerEnterCapture={props.onPointerEnterCapture || (() => {})}
            onPointerLeaveCapture={props.onPointerLeaveCapture || (() => {})}
        >
            {props.children}
        </Navbar>
    );
};

export default CustomNavbar;
