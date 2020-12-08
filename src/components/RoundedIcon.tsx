import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
  name: string;
  iconRatio: number;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"] | undefined;
  align: "center" | "flex-start" | "flex-end";
}

const RoundedIcon = ({
  name,
  iconRatio,
  size,
  color,
  backgroundColor,
  align,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems={align}
      {...{ backgroundColor }}
      style={{ borderRadius: size / 2 }}
    >
      <Text {...{ color }} style={{ width: iconSize, height: iconSize }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = { iconRatio: 0.7, align: "center" };

export default RoundedIcon;
