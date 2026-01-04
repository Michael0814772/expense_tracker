import { SettingIconProps } from "@/type/SettingsIconProps";
import React from "react";
import Svg, { Line, Path } from "react-native-svg";

const ClearDataIcon = ({ size = 24, color = "#7C3AED" }: SettingIconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width={2}
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path d="M3 6h18"></Path>
      <Path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></Path>
      <Path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></Path>
      <Line x1="10" x2="10" y1="11" y2="17"></Line>
      <Line x1="14" x2="14" y1="11" y2="17"></Line>
    </Svg>
  );
};

export default ClearDataIcon;
