import CategoryCard from "@/components/card/CategoryCard";
import { BackArrowIcon } from "@/components/icons/BackArrowIcon";
import { DateInput } from "@/components/ui/DateInput";
import { FormInputTab } from "@/components/ui/FormInputTab";
import SubmitButton from "@/components/ui/SubmitButton";
import GradientToggleButton from "@/components/ui/TypeButton";
import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import formatDateTime from "@/utils/formatDateTime";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Transaction = {
  id: string;
  categoryId: string;
  reason: string;
  dateTime: string;
  amount: number;
  type: "income" | "expense";
};

const addTransactions = () => {
  const [type, setType] = React.useState<"income" | "expense">("expense");
  const [amount, setAmount] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedCategoryId, setSelectedCategoryId] = React.useState("");

  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  function handleSubmit() {
    if (!amount || !description || !selectedCategoryId || !selectedDate) {
      alert("Please fill all fields");
      return;
    }

    const numericAmount = Number(amount);

    const newTransaction: Transaction = {
      id: Date.now().toString(),
      categoryId: selectedCategoryId,
      reason: description,
      dateTime: formatDateTime(selectedDate.toISOString()),
      amount: type === "expense" ? -numericAmount : numericAmount,
      type,
    };
    console.log(newTransaction);

    setTransactions((prev) => [newTransaction, ...prev]);

    // Reset form
    setAmount("");
    setDescription("");
    setSelectedCategoryId("");
    setSelectedDate(null);

    router.push("/");
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDark ? COLORS.gray[900] : COLORS.gray[200],
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* SCROLLABLE CONTENT */}
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 140, // space for sticky button
          }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              gap: 10,
              alignItems: "center",
            }}
          >
            <Pressable onPress={() => router.back()}>
              <BackArrowIcon
                color={isDark ? COLORS.gray[200] : COLORS.gray[900]}
              />
            </Pressable>

            <GradientToggleButton
              label="Expense"
              value="expense"
              activeType={type}
              onPress={() => setType("expense")}
            />

            <GradientToggleButton
              label="Income"
              value="income"
              activeType={type}
              onPress={() => setType("income")}
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <FormInputTab
              value={amount}
              onChangeText={(text) => setAmount(text.replace(/[^0-9.]/g, ""))}
              placeholder="0.00"
              inputMode="decimal"
              textHeader="₦ Amount"
            />

            <FormInputTab
              value={description}
              onChangeText={setDescription}
              placeholder="e.g., Grocery shopping"
              inputMode="text"
              textHeader="₦ Description"
            />
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: isDark ? COLORS.gray[200] : COLORS.gray[900],
              }}
            >
              Category
            </Text>

            {/* Category selection UI can be added here */}
            <CategoryCard
              type={type}
              categoryIdSelected={setSelectedCategoryId}
              categoryId={selectedCategoryId}
              backgroundColor={isDark ? COLORS.gray[700] : COLORS.gray[200]}
              textColor={isDark ? COLORS.gray[200] : COLORS.gray[900]}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: isDark ? COLORS.gray[200] : COLORS.gray[900],
                marginBottom: 10,
              }}
            >
              Date
            </Text>

            <DateInput dateSet={setSelectedDate} dateSelected={selectedDate} />
          </View>
        </ScrollView>

        <View
          style={{
            padding: 16,
            marginBottom: 20,
          }}
        >
          <SubmitButton
            label={type === "expense" ? "Add Expense" : "Add Income"}
            value={type === "expense" ? "expense" : "income"}
            activeType={type}
            onPress={handleSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default addTransactions;
