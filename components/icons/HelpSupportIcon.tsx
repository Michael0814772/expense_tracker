import { SettingIconProps } from "@/type/SettingsIconProps";
import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const HelpSupportIcon = ({
  size = 24,
  color = "#7C3AED",
}: SettingIconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Circle cx="12" cy="12" r="10"></Circle>
      <Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></Path>
      <Path d="M12 17h.01"></Path>
    </Svg>
  );
};

export default HelpSupportIcon;
