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
import ThemeToggle from "@/components/ui/ThemeToggle";
import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const settings = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const styles = createStyles(isDark);
  const displayAdvert = false;
  return (
    <SafeAreaView style={styles.screen}>
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
            <Text style={styles.headerTitle}>settings</Text>
          </View>

          <View>
            <Advertisement displayAdd={displayAdvert} />
          </View>

          <Text style={styles.sectionTitle}>QUICK ACTIONS</Text>

          <View style={styles.cardContainer}>
            <View style={styles.cardPadding}>
              <SettingCard
                header1="Budget Management"
                header2="Track your spending limit"
                icon1={<Budget />}
                backgroundColor1={COLORS.primary[200]}
              />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardPadding}>
              <SettingCard
                header1="Finacial Reports"
                header2="View detailed analytics"
                icon1={<FinancialReport />}
                backgroundColor1={COLORS.indigo[200]}
              />
            </View>
          </View>

          <Text style={styles.sectionTitle}>GENERAL</Text>

          <View style={styles.cardContainer}>
            <View style={styles.cardPadding}>
              <SettingCard
                header1="Notifications"
                header2="Manage alerts and reminders"
                icon1={<NotificationReport />}
                backgroundColor1={COLORS.primary[200]}
              />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardPadding}>
              <SettingCard
                header1="Dark Mode"
                header2="Enable dark theme"
                icon1={<DarkModeSwitch />}
                backgroundColor1={COLORS.indigo[200]}
                icon2={<ThemeToggle />}
              />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardPadding}>
              <SettingCard
                header1="Language"
                header2="English"
                icon1={<LanguageIcon />}
                backgroundColor1={COLORS.green[200]}
              />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardPadding}>
              <SettingCard
                header1="Currency"
                header2="Naira (#)"
                icon1={<CurrencyIcon color={COLORS.yellow[600]} />}
                backgroundColor1={COLORS.yellow[200]}
              />
            </View>
          </View>

          <Text style={styles.sectionTitle}>DATA</Text>

          <View style={styles.cardContainer}>
            <View style={styles.cardPadding}>
              <SettingCard
                header1="Export Data"
                header2="Dowload your transactions"
                icon1={<ExportIcon color={COLORS.blue[600]} />}
                backgroundColor1={COLORS.blue[200]}
              />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardPadding}>
              <SettingCard
                header1="Clear All Data"
                header2="Delete all transactions"
                icon1={<ClearDataIcon color={COLORS.red[600]} />}
                backgroundColor1={COLORS.red[200]}
              />
            </View>
          </View>

          <Advertisement />

          <Text style={styles.sectionTitle}>ABOUT & SUPPORT</Text>

          <View style={styles.cardContainer}>
            <View style={styles.cardPadding}>
              <SettingCard
                header1="Rate US"
                header2="Enjoying this app?"
                icon1={<RateUsIcon color={COLORS.orange[600]} />}
                backgroundColor1={COLORS.orange[200]}
              />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardPadding}>
              <SettingCard
                header1="Share App"
                header2="Tell your friends"
                icon1={<ShareAppIcon color={COLORS.cyan[600]} />}
                backgroundColor1={COLORS.cyan[200]}
              />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardPadding}>
              <SettingCard
                header1="Help & Support"
                header2="Get assistance"
                icon1={<HelpSupportIcon color={COLORS.pink[600]} />}
                backgroundColor1={COLORS.pink[200]}
              />
            </View>

            <View style={styles.divider}></View>

            <View style={styles.cardPadding}>
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
          style={[
            styles.center,
            {
              marginTop: 20,
            },
          ]}
        >
          <Text style={styles.footerText}>Expense Tracker v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default settings;

const createStyles = (isDark: boolean) =>
  StyleSheet.create({
    screen: {
      backgroundColor: isDark ? COLORS.gray[900] : COLORS.gray[200],
    },

    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: isDark ? COLORS.gray[100] : COLORS.gray[800],
    },

    sectionTitle: {
      fontSize: 15,
      marginBottom: 20,
      paddingHorizontal: 8,
      color: isDark ? COLORS.gray[400] : COLORS.gray[600],
    },

    cardContainer: {
      backgroundColor: isDark ? COLORS.gray[800] : COLORS.background.white,
      borderRadius: 24,
      marginBottom: 20,

      // iOS shadow
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,

      // Android
      elevation: 4,
    },

    divider: {
      borderColor: isDark ? COLORS.gray[700] : COLORS.gray[200],
      borderWidth: 0.4,
      marginVertical: 1,
    },

    cardPadding: {
      paddingVertical: 18,
      paddingHorizontal: 20,
    },

    footerText: {
      fontSize: 15,
      color: COLORS.gray[400],
      paddingHorizontal: 8,
    },

    center: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
