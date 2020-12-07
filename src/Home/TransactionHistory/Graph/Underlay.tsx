import React from "react";
import { StyleSheet } from "react-native";

import { Box, Text, useTheme } from "../../../components";
import { lerp } from "./Helper";

const formatter = Intl.DateTimeFormat("en", { month: "short" });
export const MARGIN = "xl";
export const ROW_HEIGHT = 16;

interface UnderlayProps {
  dates: number[];
  minY: number;
  maxY: number;
  step: number;
}

const Underlay = ({ dates, minY, maxY, step }: UnderlayProps) => {
  const theme = useTheme();
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((item) => {
          return (
            <Box
              key={item}
              flexDirection="row"
              alignItems="center"
              height={ROW_HEIGHT}
              style={{
                top:
                  item === 0
                    ? ROW_HEIGHT / 2
                    : item === 1
                    ? -ROW_HEIGHT / 2
                    : 0,
              }}
            >
              <Box width={theme.spacing[MARGIN]} paddingRight="s">
                <Text color="darkGrey" textAlign="right">
                  {Math.round(lerp(minY, maxY, item))}
                </Text>
              </Box>
              <Box flex={1} height={1} backgroundColor="grey"></Box>
            </Box>
          );
        })}
      </Box>
      <Box
        marginLeft={MARGIN}
        height={theme.spacing[MARGIN]}
        flexDirection="row"
        alignItems="center"
      >
        {dates.map((date, index) => (
          <Box key={index} width={step}>
            <Text color="darkGrey" textAlign="center">
              {formatter.format(new Date(date))}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Underlay;
