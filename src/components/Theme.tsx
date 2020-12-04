import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const theme = {
  colors: {
    primary: "#2cb9b0",
    secondary: "#0c0d34",
    text: "rgba(12, 13, 52, 0.7)",
    white: "white",
    grey: "rgba(12, 13, 52, 0.05)",
    danger: "red",
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
      color: "white",
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
  },
  breakpoints: {},
};

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
// export default theme;
