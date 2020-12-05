import React, { ReactNode } from "react";
import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, useTheme } from "./Theme";

const { width, height: wHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
const images = [
  require("../../assets/pattern1.png"),
  require("../../assets/pattern2.png"),
  require("../../assets/pattern3.png"),
];

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = images[pattern];
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight} backgroundColor="secondary">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image
              source={asset}
              style={{
                width,
                height,
                borderBottomLeftRadius: theme.borderRadii.xl,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={require("../../assets/pattern1.png")}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius={0}
            backgroundColor="white"
            flex={1}
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary" paddingTop="m">
          {footer}
          <Box height={insets.bottom}></Box>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
