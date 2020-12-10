import React, { ReactNode } from "react";
import { Dimensions, View } from "react-native";
import Animated from "react-native-reanimated";

import { Box, useTheme } from "../../components";

const { width } = Dimensions.get("window");
const aspectRatio = width / 375;
const height = 682 * aspectRatio;

interface CartContainerProps {
  children: ReactNode;
}

const CartContainer = ({ children }: CartContainerProps) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="secondary">
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height,
          backgroundColor: "white",
          borderBottomLeftRadius: theme.borderRadii.xl,
          borderBottomRightRadius: theme.borderRadii.xl,
        }}
      >
        {children}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: theme.borderRadii.xl,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 5 * aspectRatio,
              backgroundColor: theme.colors.background2,
              width: 60 * aspectRatio,
              borderRadius: 2.5 * aspectRatio,
              marginBottom: theme.spacing.m,
            }}
          />
        </View>
      </Animated.View>
    </Box>
  );
};

export default CartContainer;
