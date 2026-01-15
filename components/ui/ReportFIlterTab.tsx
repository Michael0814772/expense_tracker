import { COLORS } from "@/constants/colors";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Filter = {
  id: string;
  label: string;
  searchWord: string;
};

type Props = {
  data: Filter[];
  active: string;
  onChange: (value: string) => void;
};

const ReportFIlterTab = ({ data, active, onChange }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginBottom: 10,
        gap: 10,
      }}
    >
      {data
        ?.filter((out) => out.searchWord !== "all")
        .map((item) => {
          const isActive = active === item.searchWord;

          return (
            <Pressable
              key={item.id}
              onPress={() => onChange(item.searchWord)}
              style={{
                backgroundColor: isActive
                  ? item.searchWord === "expense"
                    ? COLORS.orange[500]
                    : COLORS.icon.purple
                  : COLORS.text.white,
                paddingHorizontal: 40,
                paddingVertical: 8,
                borderRadius: 20,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  lineHeight: 30,
                  fontWeight: "700",
                  fontStyle: "normal",
                  color: isActive ? COLORS.text.white : COLORS.text.primary,
                }}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
    </View>
  );
};

export default ReportFIlterTab;
