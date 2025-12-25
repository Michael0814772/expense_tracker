import Svg, { Circle } from "react-native-svg";

export function GridIcon({ size = 40, color = "#000000" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="8" cy="8" r="3" fill={color} />
      <Circle cx="16" cy="8" r="3" fill={color} />
      <Circle cx="8" cy="16" r="3" fill={color} />
      <Circle cx="16" cy="16" r="3" fill={color} />
    </Svg>
  );
}
