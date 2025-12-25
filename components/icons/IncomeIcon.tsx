import Svg, { Circle, Path } from "react-native-svg";

export function IncomeIcon({ size = 28 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Circle */}
      <Circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.2)" />

      {/* Arrow down */}
      <Path
        d="M12 7v8m0 0l-3-3m3 3l3-3"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
