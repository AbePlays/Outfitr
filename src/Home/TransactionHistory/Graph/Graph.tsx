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
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  minDate: number;
  maxDate: number;
}

const Graph = ({ data, minDate, maxDate }: GraphProps) => {
  const theme = useTheme();
  const numberOfMonths = new Date(maxDate - minDate).getMonth();
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const values = data.map((item) => item.value);
  const dates = data.map((item) => item.date);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / numberOfMonths;
  return (
    <Box paddingBottom={MARGIN} paddingLeft={MARGIN} marginTop="xl">
      <Underlay
        dates={dates}
        minY={minY}
        maxY={maxY}
        minX={minDate}
        maxX={maxDate}
        step={step}
      />
      <Box width={width} height={height}>
        {data.map((item) => {
          const i = new Date(item.date - minDate).getMonth();
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
      </Box>
    </Box>
  );
};

export default Graph;
