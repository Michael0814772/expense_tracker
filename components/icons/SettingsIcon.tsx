import Svg, { Circle, Path } from "react-native-svg";

export function SettingsIcon({ color, size = 24 }: any) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="3" stroke={color} strokeWidth={3} />
      <Path
        d="M19.4 15L18 17L16.6 16M4.6 15L6 17L7.4 16"
        stroke={color}
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
}