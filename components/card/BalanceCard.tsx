import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function BalanceCard({ children }: Props) {
  return (
    <LinearGradient
      colors={["#6D83F2", "#8B5CF6", "#F472B6", "#FB923C"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderRadius: 24,
        padding: 20,
      }}
    >
      {children}
    </LinearGradient>
  );
}
