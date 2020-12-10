import React, { ReactNode } from "react";
import { Dimensions, View, StyleSheet, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

import { useTheme } from "./Theme";

const { width } = Dimensions.get("window");
const viewBox = {
  width: 375,
  height: 100,
};
const height = (100 * width) / viewBox.width;
const d = "M 0 0 H 375 A 50 50 0 0 1 325 50 H 50 A 50 50 0 0 0 0 100";

interface ContentFooterProps {
  children: ReactNode;
}

const ContentFooter = ({ children }: ContentFooterProps) => {
  const theme = useTheme();
  return (
    <>
      <Image
        source={require("../../assets/pattern1.png")}
        style={{
          ...StyleSheet.absoluteFillObject,
          width: undefined,
          height: undefined,
          resizeMode: "repeat",
        }}
      />
      <View style={{ ...StyleSheet.absoluteFillObject }} />
      {children}
      <Svg
        width={width}
        height={height}
        viewBox={[0, 0, viewBox.width, viewBox.height].join(" ")}
      >
        <Path fill={theme.colors.background} d={d}></Path>
      </Svg>
    </>
  );
};

export default ContentFooter;
