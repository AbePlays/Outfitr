import React, { ReactNode } from "react";
import {
  createBox,
  createText,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const pallete = {
  white: "white",
};

const theme = {
  colors: {
    primary: "#2cb9b0",
    primaryLight: "#e7f9f7",
    secondary: "#0c0d34",
    text: "rgba(12, 13, 52, 0.7)",
    background: pallete.white,
    grey: "rgba(12, 13, 52, 0.05)",
    lightGrey: "#fafafa",
    darkGrey: "#808080",
    danger: "red",
    orange: "#f35e33",
    yellow: "#ffc641",
    pink: "#ff87a2",
    violet: "#442cb9",
    lightBlue: "#BFEAF5",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: "background",
      fontWeight: "bold",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontWeight: "600",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontWeight: "600",
      color: "secondary",
    },
    title3: {
      fontSize: 16,
      fontWeight: "600",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "600",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontWeight: "500",
      color: "text",
    },
    header: {
      fontSize: 12,
      fontWeight: "600",
      lineHeight: 24,
      color: "secondary",
    },
  },
  breakpoints: {},
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);
export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
