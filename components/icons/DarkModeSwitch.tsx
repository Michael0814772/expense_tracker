import { SettingIconProps } from "@/type/SettingsIconProps";
import React from "react";
import Svg, { Path } from "react-native-svg";

const DarkModeSwitch = ({ size = 24, color = "#7C3AED" }: SettingIconProps) => {
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
      <Path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></Path>
    </Svg>
  );
};

export default DarkModeSwitch;
