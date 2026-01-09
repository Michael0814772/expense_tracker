import Advertisement from "@/components/advert/Advertisement";
import { BalanceAmount } from "@/components/card/BalanceAmount";
import { BalanceCard } from "@/components/card/BalanceCard";
import { BalanceHeader } from "@/components/card/BalanceHeader";
import { BalanceStatsRow } from "@/components/card/BalanceStatsRow";
import { TransactionItem } from "@/components/common/TransactionItem";
import { GridIcon } from "@/components/icons/GridIcon";
import { NotificationIcon } from "@/components/icons/NotificationIcon";
import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { transactionData } from "@/data/transactions";
import { totalExpense, totalIncome } from "@/utils/transactionTotals";
import { router } from "expo-router";
import { useMemo } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { income, expense } = useMemo(() => {
    return {
      income: totalIncome(transactionData),
      expense: totalExpense(transactionData),
    };
  }, []);

  const balance = income - expense;

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDark ? COLORS.gray[900] : COLORS.gray[100],
        flex: 1,
      }}
    >
      <View className="px-5">
        <View className="flex-row justify-between items-center mb-8">
          <GridIcon color={isDark ? COLORS.gray[200] : "#000000"} />
          {/* Home content */}
          <Text
            style={{
              fontSize: 24,
              lineHeight: 32,
              fontWeight: "800",
              color: isDark ? COLORS.gray[200] : COLORS.gray[900],
            }}
          >
            Home
          </Text>

          <NotificationIcon color={isDark ? COLORS.gray[200] : "#000000"} />
        </View>

        <BalanceCard>
          <BalanceHeader title="Total Balance" />
          <BalanceAmount amount={`₦${balance.toLocaleString()}`} />
          <BalanceStatsRow
            income={`₦ ${income.toLocaleString()}`}
            expenses={`₦ ${expense.toLocaleString()}`}
          />
        </BalanceCard>

        <Advertisement />

        <View
          style={{
            marginTop: 32,
            marginBottom: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            className="text-lg font-medium"
            style={{ color: isDark ? COLORS.gray[200] : COLORS.gray[900] }}
          >
            Transactions
          </Text>
          <Pressable
            onPress={() => router.push("/transactionsTab")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.6 : 1,
            })}
          >
            <Text className="text-sm font-normal text-primary-500">
              See all
            </Text>
          </Pressable>
        </View>

        <View>
          <FlatList
            data={transactionData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TransactionItem
                categoryId={item.categoryId}
                reason={item.reason}
                dateTime={item.dateTime}
                amount={item.amount}
                showBottomBorder={true}
              />
            )}
            ItemSeparatorComponent={() => <View className="h-[.2px]" />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
