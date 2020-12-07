import React from "react";
import { Dimensions } from "react-native";

import { Box, useTheme } from "../../../components";
import { Theme } from "../../../components/Theme";
import { lerp } from "./Helper";
import Underlay, { MARGIN } from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
}

interface GraphProps {
  data: DataPoint[];
}

const Graph = ({ data }: GraphProps) => {
  const theme = useTheme();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const values = data.map((item) => item.value);
  const dates = data.map((item) => item.date);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / data.length;
  return (
    <Box paddingBottom={MARGIN} paddingLeft={MARGIN} marginTop="xl">
      <Underlay dates={dates} minY={minY} maxY={maxY} step={step} />
      <Box width={width} height={height}>
        {data.map((item, i) => {
          if (item.value === 0) return null;
          return (
            <Box
              key={item.date}
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
      </Box>
    </Box>
  );
};

export default Graph;
