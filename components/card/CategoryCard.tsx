import { COLORS } from "@/constants/colors";
import { categories } from "@/data/categories";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type Props = {
  type: string;
  categoryIdSelected: (value: string) => void;
  categoryId: string;
};

const CategoryCard = ({ type, categoryIdSelected, categoryId }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginTop: 10,
        width: "100%",
      }}
    >
      {categories
        ?.filter((category) => type === category.type)
        ?.map((category) => {
          const isSelected = categoryId === category.id;
          return (
            <Pressable
              key={category.id}
              onPress={() => categoryIdSelected(category.id)}
              style={{
                width: 109,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                paddingHorizontal: 10,
                paddingVertical: 15,

                // Border when selected
                borderWidth: isSelected ? 2 : 2,
                borderColor: isSelected
                  ? COLORS.primary[600] // purple
                  : "transparent",

                // ight purple overlay when selected
                backgroundColor: isSelected
                  ? COLORS.primary[100]
                  : COLORS.gray[200],
              }}
            >
              <Image
                source={{ uri: category.imageUrl }}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
              <Text
                key={category.id}
                style={{ marginTop: 8, fontSize: 12 }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                {category.name}
              </Text>
            </Pressable>
          );
        })}
    </View>
  );
};

export default CategoryCard;
