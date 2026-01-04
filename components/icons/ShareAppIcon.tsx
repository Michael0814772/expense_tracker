import { SettingIconProps } from "@/type/SettingsIconProps";
import React from "react";
import Svg, { Circle, Line } from "react-native-svg";

const ShareAppIcon = ({ size = 24, color = "#7C3AED" }: SettingIconProps) => {
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
      <Circle cx="18" cy="5" r="3"></Circle>
      <Circle cx="6" cy="12" r="3"></Circle>
      <Circle cx="18" cy="19" r="3"></Circle>
      <Line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></Line>
      <Line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></Line>
    </Svg>
  );
};

export default ShareAppIcon;
