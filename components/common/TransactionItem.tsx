import { COLORS } from "@/constants/colors";
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
        borderBottomWidth: showBottomBorder ? 3 : 0,
        borderBottomColor: COLORS.gray[200],
        paddingBottom: 12,
        paddingTop: 12,
      }}
    >
      {/* Left side */}
      <View className="flex-row items-center">
        {/* Icon (text-based) */}
        <View
          className="w-12 h-12 rounded-full bg-gray-100 items-center justify-center"
          style={{ marginRight: 8 }}
        >
          {category?.imageUrl ? (
            <Image
              source={{ uri: category.imageUrl }}
              style={{ width: 36, height: 36 }}
              resizeMode="contain"
            />
          ) : (
            <Text className="text-xs font-semibold">{categoryId}</Text>
          )}
        </View>

        {/* Details */}
        <View className="ml-3">
          <Text className="font-semibold text-sm" style={{ marginBottom: 3 }}>
            {reason}
          </Text>
          <Text style={{ color: "#888", fontSize: 12 }}>{dateTime}</Text>
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
