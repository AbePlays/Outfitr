import React, { useLayoutEffect, useRef } from "react";
import { Dimensions } from "react-native";
import moment from "moment";
import {
  TransitioningView,
  Transition,
  Transitioning,
} from "react-native-reanimated";

import { Box, useTheme } from "../../../components";
import { Theme } from "../../../components/Theme";
import { lerp } from "./Helper";
import Underlay, { MARGIN } from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;
const transition = (
  <Transition.Together>
    <Transition.In
      type="slide-bottom"
      durationMs={650}
      interpolation="easeInOut"
    />
  </Transition.Together>
);

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const theme = useTheme();
  const ref = useRef<TransitioningView>(null);
  useLayoutEffect(() => {
    ref.current?.animateNextTransition();
  }, []);
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const values = data.map((item) => item.value);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / numberOfMonths;
  return (
    <Box paddingBottom={MARGIN} paddingLeft={MARGIN} marginTop="xl">
      <Underlay
        minY={minY}
        maxY={maxY}
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        step={step}
      />
      <Transitioning.View
        style={{ width, height, overflow: "hidden" }}
        ref={ref}
        transition={transition}
      >
        {data.map((item) => {
          const i = Math.round(
            moment.duration(moment(item.date).diff(startDate)).asMonths()
          );
          return (
            <Box
              key={item.id}
              position="absolute"
              width={step}
              left={i * step}
              bottom={0}
              height={lerp(0, height, item.value / maxY)}
            >
              <Box
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={item.color}
                opacity={0.1}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
              />
              <Box
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={item.color}
                borderRadius="m"
              />
            </Box>
          );
        })}
      </Transitioning.View>
    </Box>
  );
};

export default Graph;
