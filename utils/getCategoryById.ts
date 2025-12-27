import { categories } from "@/data/categories";

export function getCategoryById(categoryId: string) {
  return categories.find((c) => c.id === categoryId);
}
