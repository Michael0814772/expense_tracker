import { SettingIconProps } from "@/type/SettingsIconProps";
import React from "react";
import Svg, { Line, Path, Polyline } from "react-native-svg";

const ExportIcon = ({ size = 24, color = "#7C3AED" }: SettingIconProps) => {
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
      <Path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></Path>
      <Polyline points="7 10 12 15 17 10"></Polyline>
      <Line x1="12" x2="12" y1="15" y2="3"></Line>
    </Svg>
  );
};

export default ExportIcon;
