import React from "react";
import Svg, { Line, Path } from "react-native-svg";

type Props = {
  size?: number;
  color?: string;
};

const UpArrowIcon = ({ size = 20, color = "#000000" }: Props) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Vertical line */}
      <Line x1="12" y1="21" x2="12" y2="8" />

      {/* Arrow head */}
      <Path d="M8 12l4-4 4 4" />
    </Svg>
  );
};

export default UpArrowIcon;
