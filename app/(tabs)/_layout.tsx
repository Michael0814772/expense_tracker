import { CenterFab } from "@/components/common/CenterTab";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { ReportIcon } from "@/components/icons/ReportIcon";
import { SettingsIcon } from "@/components/icons/SettingsIcon";
import { TransactionIcon } from "@/components/icons/TransactionIcon";
import { router, Tabs } from "expo-router";
import { View } from "react-native";

const ACTIVE = "#7C3AED"; // brand purple
const INACTIVE = "#9CA3AF"; // gray

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: ACTIVE,
        tabBarInactiveTintColor: INACTIVE,
        tabBarStyle: {
          height: 60,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="transactionsTab"
        options={{
          title: "transactions",
          tabBarIcon: ({ color }) => (
            <View className="">
              <TransactionIcon color={color} />
            </View>
          ),
        }}
      />

      {/* CENTER FAB (NOT A REAL SCREEN) */}
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarButton: () => (
            <View className="flex justify-center items-center">
              <CenterFab onPress={() => router.push("/add-transaction")} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: ({ color }) => <ReportIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
