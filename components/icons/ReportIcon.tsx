import Svg, { Line } from "react-native-svg";

export function ReportIcon({ color, size = 24 }: any) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Line x1="6" y1="20" x2="6" y2="10" stroke={color} strokeWidth={3} strokeLinecap="round" />
      <Line x1="12" y1="20" x2="12" y2="6" stroke={color} strokeWidth={3} strokeLinecap="round" />
      <Line x1="18" y1="20" x2="18" y2="14" stroke={color} strokeWidth={3} strokeLinecap="round" />
    </Svg>
  );
}