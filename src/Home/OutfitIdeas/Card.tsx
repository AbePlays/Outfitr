import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { add } from "react-native-reanimated";
import {
  mix,
  mixColor,
  usePanGestureHandler,
  withSpring,
} from "react-native-redash";

import { Box } from "../../components";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.7;
const height = width * (425 / 294);
const borderRadius = 24;

interface CardProps {
  position: Animated.Adaptable<number>;
}

const Card = ({ position }: CardProps) => {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const backgroundColor = mixColor(position, "#c9e9e7", "#74bcb8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width, 0, width],
  });
  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [-height, 0, height],
    })
  );

  return (
    <Box
      style={StyleSheet.absoluteFillObject}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateX }, { translateY }, { scale }],
          }}
        ></Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
