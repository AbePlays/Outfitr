import React from "react";
import Svg, { Circle, ClipPath, Defs, Path, Rect } from "react-native-svg";

import { useTheme } from "../../components";
import { palette } from "../../components/Theme";

interface TopCurveProps {
  footerHeight: number;
}

const TopCurve = ({ footerHeight }: TopCurveProps) => {
  const theme = useTheme();
  const size = theme.borderRadii.xl;
  return (
    <Svg
      width={size}
      height={size}
      style={{
        position: "absolute",
        bottom: footerHeight,
        right: 0,
      }}
      viewBox="0 0 1 1"
    >
      <Defs>
        <ClipPath id="clip">
          <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1 " />
        </ClipPath>
      </Defs>
      <Rect
        clipPath="url(#clip)"
        x={0}
        y={0}
        height={1}
        width={1}
        fill={palette.green}
      />
      <Circle
        cx={0.4}
        cy={0.5}
        r={0.5}
        clipPath="url(#clip)"
        fill={palette.orange}
      />
    </Svg>
  );
};

export default TopCurve;
