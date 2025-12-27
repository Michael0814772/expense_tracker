import Svg, { Path } from "react-native-svg";

export function DeleteIcon({
  size = 20,
  color = "#000000",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M3 6h18" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <Path
        d="M8 6V4h8v2"
        stroke={color}
        strokeWidth={1.0}
        strokeLinecap="round"
      />
      <Path
        d="M6 6l1 14h10l1-14"
        stroke={color}
        strokeWidth={1.0}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 11v6M14 11v6"
        stroke={color}
        strokeWidth={1.0}
        strokeLinecap="round"
      />
    </Svg>
  );
}
