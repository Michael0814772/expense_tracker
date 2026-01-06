import Advertisement from "@/components/advert/Advertisement";
import { TransactionItem } from "@/components/common/TransactionItem";
import { BackArrowIcon } from "@/components/icons/BackArrowIcon";
import FilterTabs from "@/components/ui/FilterTabs";
import { SearchInput } from "@/components/ui/SearchInput";
import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { SearchFilterData } from "@/data/searchFilter";
import { transactionData as initialTransactions } from "@/data/transactions";
import filterTransactionsByReason from "@/utils/filterTransactionsByReason";
import groupTransactionsByDate from "@/utils/groupTransactionsByDate";
import { router } from "expo-router";
import React from "react";
import {
  Platform,
  Pressable,
  SectionList,
  Text,
  UIManager,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* Enable LayoutAnimation on Android */
if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const transactionsTab = () => {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("all");
  const [deleteTransactions, setDeleteTransactions] =
    React.useState(initialTransactions);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* =========================
   * DELETE HANDLER
   * ========================= */
  function handleDeleteTransaction(id: string) {
    setDeleteTransactions((prev) => prev.filter((tx) => tx.id !== id));
  }

  const filteredTransactions = filterTransactionsByReason(
    deleteTransactions,
    search,
    filter
  );

  const sections = groupTransactionsByDate(filteredTransactions);

  return (
    <SafeAreaView
      style={{ backgroundColor: isDark ? COLORS.gray[900] : COLORS.gray[200] }}
    >
      <View className="px-5">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Pressable onPress={() => router.back()}>
            <BackArrowIcon
              color={isDark ? COLORS.gray[200] : COLORS.gray[900]}
            />
          </Pressable>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: isDark ? COLORS.gray[200] : COLORS.gray[900],
            }}
          >
            Transactions
          </Text>
          <Text></Text>
        </View>

        <View>
          <SearchInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search transactions"
          />
        </View>

        <FilterTabs
          data={SearchFilterData}
          active={filter}
          onChange={setFilter}
        />

        <Advertisement />

        <View>
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id}
            renderSectionHeader={({ section }) => (
              <Text
                style={{
                  fontWeight: "600",
                  marginVertical: 8,
                  marginTop: 20,
                  color: isDark ? COLORS.gray[200] : COLORS.gray[900],
                }}
              >
                {section.title}
              </Text>
            )}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: isDark ? COLORS.gray[700] : COLORS.gray[300],
                  borderRadius: 12,
                  paddingHorizontal: 12,
                  marginBottom: 8,
                  marginTop: 4,
                }}
              >
                <TransactionItem
                  id={item.id}
                  categoryId={item.categoryId}
                  reason={item.reason}
                  dateTime={item.dateTime}
                  amount={item.amount}
                  showBottomBorder={false}
                  showDeleteBottom={true}
                  onDelete={handleDeleteTransaction}
                />
              </View>
            )}
          />
        </View>

        <Advertisement />
      </View>
    </SafeAreaView>
  );
};

export default transactionsTab;
