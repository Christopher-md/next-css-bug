"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import "./Themes.scss";

type Props = {
  children: React.ReactNode;
  forcedTheme?: "light" | "dark";
};

export const DEFAULT_THEME_VALUE = "light";

const ThemeProvider: React.FC<Props> = ({ children, forcedTheme }) => (
  <NextThemesProvider
    attribute="class"
    forcedTheme={forcedTheme}
    value={{ light: "light-mode", dark: "dark-mode" }}
    defaultTheme={DEFAULT_THEME_VALUE}
    storageKey="theme"
  >
    {children}
  </NextThemesProvider>
);

export default ThemeProvider;
