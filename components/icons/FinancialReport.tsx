import { SettingIconProps } from "@/type/SettingsIconProps";
import React from "react";
import Svg, { Path } from "react-native-svg";

const FinancialReport = ({
  size = 24,
  color = "#4F46E5",
}: SettingIconProps) => {
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
      <Path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></Path>
      <Path d="M14 2v4a2 2 0 0 0 2 2h4"></Path>
      <Path d="M10 9H8"></Path>
      <Path d="M16 13H8"></Path>
      <Path d="M16 17H8"></Path>
    </Svg>
  );
};

export default FinancialReport;
