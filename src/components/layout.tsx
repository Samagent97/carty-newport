"use client";

import React, { ReactNode, ReactElement } from "react";
import { ThemeProvider } from "@material-tailwind/react";

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

export function Layout({ children }: LayoutProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
