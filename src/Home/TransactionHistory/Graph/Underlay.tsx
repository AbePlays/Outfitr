import React from "react";
import { StyleSheet } from "react-native";
import moment from "moment";

import { Box, Text, useTheme } from "../../../components";
import { lerp } from "./Helper";

const formatter = Intl.DateTimeFormat("en", { month: "short" });
export const MARGIN = "xl";
export const ROW_HEIGHT = 16;

interface UnderlayProps {
  minY: number;
  maxY: number;
  step: number;
  startDate: number;
  numberOfMonths: number;
}

const Underlay = ({
  minY,
  maxY,
  step,
  startDate,
  numberOfMonths,
}: UnderlayProps) => {
  const theme = useTheme();
  const minDate = moment(startDate);
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
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => minDate.clone().add(i, "month"))
          .map((date, index) => (
            <Box key={index} width={step}>
              <Text color="darkGrey" textAlign="center">
                {date.format("MMM")}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
