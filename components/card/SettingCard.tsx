import { COLORS } from "@/constants/colors";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  header1: string;
  header2: string;
  icon1: React.ReactNode;
  backgroundColor1: string;
};

const SettingCard = ({ header1, header2, icon1, backgroundColor1 }: Props) => {
  return (
    <View>
      <View style={{ flexDirection: "row", gap: 13, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: backgroundColor1, // light purple bg
            padding: 10,
            borderRadius: 16, // rounded-2xl
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon1}
        </View>
        <View>
          <Text
            style={{ fontSize: 18, color: COLORS.gray[800], marginBottom: 4 }}
          >
            {header1}
          </Text>
          <Text style={{ fontSize: 13, color: COLORS.gray[500] }}>
            {header2}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SettingCard;
