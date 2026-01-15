import { COLORS } from "@/constants/colors";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  header: string;
  amount: string;
  icon: React.ReactNode;
  backgroundColor?: string;
  iconBackgroundColor: string;
};

const ReportTotal = ({
  header,
  amount,
  icon,
  backgroundColor,
  iconBackgroundColor,
}: Props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: backgroundColor,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        flex: 1,
      }}
    >
      <Text
        style={{
          color: COLORS.gray[900],
          fontWeight: 200,
          lineHeight: 32,
          fontSize: 21,
          paddingBottom: 5,
        }}
      >
        {header}
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: iconBackgroundColor,
            borderRadius: 150,
            paddingVertical: 2,
            paddingHorizontal: 2,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {icon}
        </View>
        <View style={{ flexDirection: "row", gap: 2 }}>
          <Text style={{ fontSize: 17, fontWeight: "400" }}>₦</Text>
          <Text style={{ fontSize: 17, fontWeight: "400" }}>{amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReportTotal;
