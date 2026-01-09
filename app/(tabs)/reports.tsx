import ReportTotal from "@/components/card/ReportTotal";
import { TransactionItem } from "@/components/common/TransactionItem";
import DownArrowIcon from "@/components/icons/DownArrowIcon";
import { GridIcon } from "@/components/icons/GridIcon";
import UpArrowIcon from "@/components/icons/UpArrowIcon";
import ModeDropdown from "@/components/ui/ModeDropdown";
import ReportFIlterTab from "@/components/ui/ReportFIlterTab";
import { StatisticsChart } from "@/components/ui/StatisticsChart";
import YearDropdown from "@/components/ui/YearDropdown";
import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { SearchFilterData } from "@/data/searchFilter";
import { transactionData } from "@/data/transactions";
import filterTransactionsByReason from "@/utils/filterTransactionsByReason";
import { getDisplayRange } from "@/utils/getDisplayRange";
import { totalExpense, totalIncome } from "@/utils/transactionTotals";
import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const reports = () => {
  const [mode, setMode] = useState<"weekly" | "monthly">("weekly");
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(0); // January
  const [filter, setFilter] = React.useState("income");
  const [search, setSearch] = React.useState("");
  const [deleteTransactions, setDeleteTransactions] =
    React.useState(transactionData);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const displayRange = getDisplayRange(mode, year, month);

  const filteredTransactions = filterTransactionsByReason(
    deleteTransactions,
    search,
    filter
  );

  const { income, expense } = useMemo(() => {
    return {
      income: totalIncome(transactionData),
      expense: totalExpense(transactionData),
    };
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDark ? COLORS.gray[900] : COLORS.gray[100],
        flex: 1,
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <FlatList
          data={filteredTransactions}
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
          ListHeaderComponent={
            <>
              <View className="flex-row justify-between items-center mb-8">
                <GridIcon
                  color={isDark ? COLORS.gray[200] : COLORS.gray[700]}
                />
                {/* Home content */}
                <Text
                  style={{
                    fontSize: 24,
                    lineHeight: 32,
                    fontWeight: "800",
                    color: isDark ? COLORS.gray[200] : COLORS.gray[700],
                  }}
                >
                  Report
                </Text>

                <View></View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 25,
                }}
              >
                <ReportTotal
                  header="Total Income"
                  amount={income.toLocaleString()}
                  icon={<DownArrowIcon size={15} color={COLORS.gray[100]} />}
                  backgroundColor={COLORS.primary[100]}
                  iconBackgroundColor={COLORS.primary[500]}
                />

                <ReportTotal
                  header="Total Expense"
                  amount={expense.toLocaleString()}
                  icon={<UpArrowIcon size={15} color={COLORS.orange[200]} />}
                  backgroundColor={COLORS.orange[100]}
                  iconBackgroundColor={COLORS.orange[500]}
                />
              </View>

              <View style={{ marginBottom: 20 }}>
                <Text
                  style={{
                    color: COLORS.gray[500],
                    fontSize: 20,
                    lineHeight: 30,
                    fontWeight: "600",
                  }}
                >
                  Statistics
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.gray[800],
                      lineHeight: 30,
                      fontSize: 12,
                      fontWeight: "600",
                    }}
                  >
                    {displayRange}
                  </Text>
                  {/* <MonthDropdown value={month} onChange={setMonth} /> */}
                  <YearDropdown value={year} onChange={setYear} />
                  <ModeDropdown value={mode} onChange={setMode} />
                </View>

                <View>
                  <StatisticsChart mode={mode} year={year} month={month} />
                </View>
              </View>

              <View>
                <ReportFIlterTab
                  data={SearchFilterData}
                  active={filter}
                  onChange={setFilter}
                />
              </View>
            </>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default reports;
