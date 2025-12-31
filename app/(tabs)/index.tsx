import Advertisement from "@/components/advert/Advertisement";
import { BalanceAmount } from "@/components/card/BalanceAmount";
import { BalanceCard } from "@/components/card/BalanceCard";
import { BalanceHeader } from "@/components/card/BalanceHeader";
import { BalanceStatsRow } from "@/components/card/BalanceStatsRow";
import { TransactionItem } from "@/components/common/TransactionItem";
import { GridIcon } from "@/components/icons/GridIcon";
import { NotificationIcon } from "@/components/icons/NotificationIcon";
import { transactionData } from "@/data/transactions";
import { router } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View className="px-5">
        <View className="flex-row justify-between items-center mb-8">
          <GridIcon />
          {/* Home content */}
          <Text className="text-2xl font-extrabold">Home</Text>

          <NotificationIcon color="#000000" />
        </View>

        <BalanceCard>
          <BalanceHeader title="Total Balance" />
          <BalanceAmount amount="$3,257.00" />
          <BalanceStatsRow income="$2,350.00" expenses="$950.00" />
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
          <Text className="text-lg font-medium">Transactions</Text>
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
            ItemSeparatorComponent={() => (
              <View className="h-[1px] bg-gray-100" />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
