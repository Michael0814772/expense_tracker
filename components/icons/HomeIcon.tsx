import Svg, { Path } from "react-native-svg";

export function HomeIcon({ color, size = 24 }: any) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 10.5L12 3L21 10.5V21H14V15H10V21H3V10.5Z"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}