import Advertisement from "@/components/advert/Advertisement";
import SettingCard from "@/components/card/SettingCard";
import Budget from "@/components/icons/Budget";
import ClearDataIcon from "@/components/icons/ClearDataIcon";
import CurrencyIcon from "@/components/icons/CurrencyIcon";
import DarkModeSwitch from "@/components/icons/DarkModeSwitch";
import ExportIcon from "@/components/icons/ExportIcon";
import FinancialReport from "@/components/icons/FinancialReport";
import HelpSupportIcon from "@/components/icons/HelpSupportIcon";
import LanguageIcon from "@/components/icons/LanguageIcon";
import NotificationReport from "@/components/icons/NotificationReport";
import PrivacyPolicy from "@/components/icons/PrivacyPolicy";
import RateUsIcon from "@/components/icons/RateUsIcon";
import ShareAppIcon from "@/components/icons/ShareAppIcon";
import { COLORS } from "@/constants/colors";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const settings = () => {
  const displayAdvert = false;
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray[200] }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              marginBottom: !displayAdvert ? 20 : 0,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>settings</Text>
          </View>

          <View>
            <Advertisement displayAdd={displayAdvert} />
          </View>

          <Text
            style={{
              color: COLORS.gray[600],
              fontSize: 15,
              marginBottom: 20,
              paddingHorizontal: 8,
            }}
          >
            QUICK ACTIONS
          </Text>

          <View
            style={{
              backgroundColor: COLORS.background.white,
              borderRadius: 24,
              marginBottom: 20,
              // iOS shadow
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,

              // Android shadow
              elevation: 4,
            }}
          >
            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Budget Management"
                header2="Track your spending limit"
                icon1={<Budget />}
                backgroundColor1={COLORS.primary[200]}
              />
            </View>

            <View
              style={{
                borderColor: COLORS.gray[200],
                borderWidth: 0.4,
                marginTop: 1,
                marginBottom: 1,
              }}
            ></View>

            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Finacial Reports"
                header2="View detailed analytics"
                icon1={<FinancialReport />}
                backgroundColor1={COLORS.indigo[200]}
              />
            </View>
          </View>

          <Text
            style={{
              color: COLORS.gray[600],
              fontSize: 15,
              marginBottom: 20,
              paddingHorizontal: 8,
            }}
          >
            GENERAL
          </Text>

          <View
            style={{
              backgroundColor: COLORS.background.white,
              borderRadius: 24,
              marginBottom: 20,
              // iOS shadow
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,

              // Android shadow
              elevation: 4,
            }}
          >
            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Notifications"
                header2="Manage alerts and reminders"
                icon1={<NotificationReport />}
                backgroundColor1={COLORS.primary[200]}
              />
            </View>

            <View
              style={{
                borderColor: COLORS.gray[200],
                borderWidth: 0.4,
                marginTop: 1,
                marginBottom: 1,
              }}
            ></View>

            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Dark Mode"
                header2="Enable dark theme"
                icon1={<DarkModeSwitch />}
                backgroundColor1={COLORS.indigo[200]}
              />
            </View>

            <View
              style={{
                borderColor: COLORS.gray[200],
                borderWidth: 0.4,
                marginTop: 1,
                marginBottom: 1,
              }}
            ></View>

            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Language"
                header2="English"
                icon1={<LanguageIcon />}
                backgroundColor1={COLORS.green[200]}
              />
            </View>

            <View
              style={{
                borderColor: COLORS.gray[200],
                borderWidth: 0.4,
                marginTop: 1,
                marginBottom: 1,
              }}
            ></View>

            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Currency"
                header2="Naira (#)"
                icon1={<CurrencyIcon color={COLORS.yellow[600]} />}
                backgroundColor1={COLORS.yellow[200]}
              />
            </View>
          </View>

          <Text
            style={{
              color: COLORS.gray[600],
              fontSize: 15,
              marginBottom: 20,
              paddingHorizontal: 8,
            }}
          >
            DATA
          </Text>

          <View
            style={{
              backgroundColor: COLORS.background.white,
              borderRadius: 24,
              marginBottom: 20,
              // iOS shadow
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,

              // Android shadow
              elevation: 4,
            }}
          >
            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Export Data"
                header2="Dowload your transactions"
                icon1={<ExportIcon color={COLORS.blue[600]} />}
                backgroundColor1={COLORS.blue[200]}
              />
            </View>

            <View
              style={{
                borderColor: COLORS.gray[200],
                borderWidth: 0.4,
                marginTop: 1,
                marginBottom: 1,
              }}
            ></View>

            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Clear All Data"
                header2="Delete all transactions"
                icon1={<ClearDataIcon color={COLORS.red[600]} />}
                backgroundColor1={COLORS.red[200]}
              />
            </View>
          </View>

          <Advertisement />

          <Text
            style={{
              color: COLORS.gray[600],
              fontSize: 15,
              marginBottom: 20,
              paddingHorizontal: 8,
            }}
          >
            ABOUT & SUPPORT
          </Text>

          <View
            style={{
              backgroundColor: COLORS.background.white,
              borderRadius: 24,
              marginBottom: 20,
              // iOS shadow
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,

              // Android shadow
              elevation: 4,
            }}
          >
            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Rate US"
                header2="Enjoying this app?"
                icon1={<RateUsIcon color={COLORS.orange[600]} />}
                backgroundColor1={COLORS.orange[200]}
              />
            </View>

            <View
              style={{
                borderColor: COLORS.gray[200],
                borderWidth: 0.4,
                marginTop: 1,
                marginBottom: 1,
              }}
            ></View>

            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Share App"
                header2="Tell your friends"
                icon1={<ShareAppIcon color={COLORS.cyan[600]} />}
                backgroundColor1={COLORS.cyan[200]}
              />
            </View>

            <View
              style={{
                borderColor: COLORS.gray[200],
                borderWidth: 0.4,
                marginTop: 1,
                marginBottom: 1,
              }}
            ></View>

            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Help & Support"
                header2="Get assistance"
                icon1={<HelpSupportIcon color={COLORS.pink[600]} />}
                backgroundColor1={COLORS.pink[200]}
              />
            </View>

            <View
              style={{
                borderColor: COLORS.gray[200],
                borderWidth: 0.4,
                marginTop: 1,
                marginBottom: 1,
              }}
            ></View>

            <View style={{ paddingVertical: 18, paddingHorizontal: 20 }}>
              <SettingCard
                header1="Privacy Policy"
                header2="Read our policy"
                icon1={<PrivacyPolicy color={COLORS.gray[600]} />}
                backgroundColor1={COLORS.gray[200]}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: COLORS.gray[400],
              fontSize: 15,
              paddingHorizontal: 8,
            }}
          >
            Expense Tracker v1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default settings;
