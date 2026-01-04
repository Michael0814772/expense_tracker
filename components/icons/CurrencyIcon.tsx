import { SettingIconProps } from "@/type/SettingsIconProps";
import React from "react";
import Svg, { Line, Path } from "react-native-svg";

const CurrencyIcon = ({ size = 24, color = "#7C3AED" }: SettingIconProps) => {
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
      {/* Left vertical */}
      <Line x1="6" y1="2" x2="6" y2="22" />

      {/* Right vertical */}
      <Line x1="18" y1="2" x2="18" y2="22" />

      {/* Diagonal bar */}
      <Path d="M6 4L18 20" />

      {/* Middle cross bars */}
      <Line x1="4" y1="9" x2="20" y2="9" />
      <Line x1="4" y1="15" x2="20" y2="15" />
    </Svg>
  );
};

export default CurrencyIcon;
