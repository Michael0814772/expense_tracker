import { COLORS } from "@/constants/colors";
import { getCategoryById } from "@/utils/getCategoryById";
import { Image, Text, View } from "react-native";

type Props = {
  categoryId: string;
  reason: string;
  dateTime: string;
  amount: number;
  showBottomBorder: boolean;
};

export function TransactionItem({
  categoryId,
  reason,
  dateTime,
  amount,
  showBottomBorder,
}: Props) {
  const isIncome = amount > 0;
  const category = getCategoryById(categoryId);

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
      <Text
        style={{
          fontWeight: "600",
          color: isIncome ? "#16a34a" : "#ef4444",
          fontSize: 12,
        }}
      >
        {isIncome ? "+" : "-"}₦{Math.abs(amount).toLocaleString()}
      </Text>
    </View>
  );
}
