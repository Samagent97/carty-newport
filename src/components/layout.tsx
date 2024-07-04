"use client";

import React, {  ReactElement } from "react";
import { ThemeProvider } from "@material-tailwind/react";

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export function Layout({ children }: LayoutProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
