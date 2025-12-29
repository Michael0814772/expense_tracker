import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const addTransactions = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          add Transactions
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default addTransactions;
