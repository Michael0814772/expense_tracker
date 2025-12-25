import Svg, { Line, Rect } from "react-native-svg";

export function TransactionIcon({ color, size = 24 }: any) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect x="4" y="3" width="16" height="18" rx="2" stroke={color} strokeWidth={3} />
      <Line x1="8" y1="7" x2="16" y2="7" stroke={color} strokeWidth={3} />
      <Line x1="8" y1="11" x2="16" y2="11" stroke={color} strokeWidth={3} />
      <Line x1="8" y1="15" x2="13" y2="15" stroke={color} strokeWidth={3} />
    </Svg>
  );
}
