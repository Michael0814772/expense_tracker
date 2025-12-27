import React from "react";
import { Text, View } from "react-native";

const Advertisement = () => {
  return (
    <View
      style={{
        marginVertical: 20,
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: "#F3F4F6",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        display: "none",
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: "#6B7280",
          fontWeight: "500",
        }}
      >
        Advertisement
      </Text>

      <Text
        style={{
          fontSize: 12,
          color: "#9CA3AF",
          marginTop: 4,
        }}
      >
        Your ad will appear here
      </Text>
    </View>
  );
};

export default Advertisement;
