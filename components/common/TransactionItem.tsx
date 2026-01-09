import { COLORS } from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { getCategoryById } from "@/utils/getCategoryById";
import { useRef } from "react";
import { Alert, Animated, Image, Pressable, Text, View } from "react-native";
import { DeleteIcon } from "../icons/DeleteIcon";

type Props = {
  id?: string;
  categoryId: string;
  reason: string;
  dateTime: string;
  amount: number;
  showBottomBorder: boolean;
  showDeleteBottom?: boolean;
  onDelete?: (id: string) => void;
};

export function TransactionItem({
  id,
  categoryId,
  reason,
  dateTime,
  amount,
  showBottomBorder,
  showDeleteBottom,
  onDelete,
}: Props) {
  const isIncome = amount > 0;
  const category = getCategoryById(categoryId);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* Press animation */
  const scaleAnim = useRef(new Animated.Value(1)).current;

  function pressIn() {
    Animated.timing(scaleAnim, {
      toValue: 0.9,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }

  function pressOut() {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }

  function confirmDelete() {
    Alert.alert(
      "Delete Transaction",
      "Are you sure you want to delete this transaction?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            if (onDelete && id) {
              onDelete(id);
            }
          },
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <View
      className="flex-row items-center justify-between py-4 mb-4"
      style={{
        borderBottomWidth: showBottomBorder ? 0.5 : 0,
        borderBottomColor: COLORS.gray[200],
        paddingBottom: 12,
        paddingTop: 12,
      }}
    >
      {/* Left side */}
      <View className="flex-row items-center">
        {/* Icon (text-based) */}
        <View
          style={{
            marginRight: 8,
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: isDark ? COLORS.gray[700] : COLORS.gray[200],
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {category?.imageUrl ? (
            <Image
              source={category.imageUrl}
              style={{ width: 36, height: 36 }}
              resizeMode="contain"
            />
          ) : (
            <Text
              className="text-xs font-semibold"
              style={{ color: isDark ? COLORS.gray[200] : COLORS.gray[900] }}
            >
              {categoryId}
            </Text>
          )}
        </View>

        {/* Details */}
        <View className="ml-3">
          <Text
            style={{
              marginBottom: 3,
              color: isDark ? COLORS.gray[200] : COLORS.gray[900],
              fontSize: 15,
              lineHeight: 20,
              fontWeight: 600,
            }}
          >
            {reason}
          </Text>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 20,
              fontWeight: 400,
              color: isDark ? COLORS.gray[200] : COLORS.gray[900],
            }}
          >
            {dateTime}
          </Text>
        </View>
      </View>

      {/* Amount */}
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            color: isIncome ? "#16a34a" : "#ef4444",
            fontSize: 12,
          }}
        >
          {isIncome ? "+" : "-"}₦{Math.abs(amount).toLocaleString()}
        </Text>

        {showDeleteBottom && onDelete && id && (
          <Pressable
            onPress={confirmDelete}
            onPressIn={pressIn}
            onPressOut={pressOut}
            style={({ pressed }) => ({
              opacity: pressed ? 0.6 : 1,
            })}
          >
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
              <DeleteIcon size={18} color="#000000" />
            </Animated.View>
          </Pressable>
        )}
      </View>
    </View>
  );
}
