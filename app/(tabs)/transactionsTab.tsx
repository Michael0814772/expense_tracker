import Advertisement from "@/components/advert/Advertisement";
import { TransactionItem } from "@/components/common/TransactionItem";
import { BackArrowIcon } from "@/components/icons/BackArrowIcon";
import FilterTabs from "@/components/ui/FilterTabs";
import { SearchInput } from "@/components/ui/SearchInput";
import { SearchFilterData } from "@/data/searchFilter";
import { transactions } from "@/data/transactions";
import filterTransactionsByReason from "@/utils/filterTransactionsByReason";
import groupTransactionsByDate from "@/utils/groupTransactionsByDate";
import React from "react";
import { Pressable, SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const transactionsTab = () => {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("all");

  const filteredTransactions = filterTransactionsByReason(
    transactions,
    search,
    filter
  );

  const sections = groupTransactionsByDate(filteredTransactions);

  return (
    <SafeAreaView>
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
          <Pressable>
            <BackArrowIcon />
          </Pressable>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Transactions</Text>
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
                style={{ fontWeight: "600", marginVertical: 8, marginTop: 20 }}
              >
                {section.title}
              </Text>
            )}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#F9FAFB",
                  borderRadius: 12,
                  paddingHorizontal: 12,
                  marginBottom: 8,
                  marginTop: 4,
                }}
              >
                <TransactionItem
                  categoryId={item.categoryId}
                  reason={item.reason}
                  dateTime={item.dateTime}
                  amount={item.amount}
                  showBottomBorder={false}
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
