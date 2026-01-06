import { SettingIconProps } from "@/type/SettingsIconProps";
import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const LanguageIcon = ({ size = 24, color = "#7C3AED" }: SettingIconProps) => {
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
      <Circle cx="12" cy="12" r="10"></Circle>
      <Path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></Path>
      <Path d="M2 12h20"></Path>
    </Svg>
  );
};

export default LanguageIcon;
