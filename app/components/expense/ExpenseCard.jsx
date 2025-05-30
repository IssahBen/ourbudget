import React from "react";
import { View, TouchableOpacity } from "react-native";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import { formatCurrency, formatDate } from "../../shared/utils/formatters";
import { getCategoryIcon } from "../../shared/utils/categoryIcons";

export default function ExpenseCard({ expense, onPress }) {
  const Icon = getCategoryIcon(expense.category);

  const categoryStyles = {
    food: { bg: "bg-primaryLightest", text: "text-primary" },
    transportation: { bg: "bg-secondaryLightest", text: "text-secondary" },
    housing: { bg: "bg-accentLightest", text: "text-accent" },
    entertainment: { bg: "bg-[#E0F7FA]", text: "text-[#00897B]" },
    utilities: { bg: "bg-[#FFF3E0]", text: "text-[#F57C00]" },
    health: { bg: "bg-[#F3E5F5]", text: "text-[#9C27B0]" },
    shopping: { bg: "bg-[#E8F5E9]", text: "text-[#43A047]" },
    personal: { bg: "bg-[#E8EAF6]", text: "text-[#3F51B5]" },
    other: { bg: "bg-[#ECEFF1]", text: "text-[#607D8B]" },
  };

  const categoryStyle = categoryStyles[expense.category.toLowerCase()] || {
    bg: "bg-backgroundTertiary",
    text: "text-textSecondary",
  };

  // Extract hex color for icon from colors object based on text class name
  // (Assuming colors keys are like 'primary', 'secondary' etc.)
  const iconColorKey = categoryStyle.text.replace("text-", "");
  const iconColor = colors[iconColorKey] || colors.textSecondary;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="flex-row items-center p-3 bg-background rounded-xl border border-border mb-3"
    >
      <View
        className={`${categoryStyle.bg} w-11 h-11 rounded-xl justify-center items-center mr-3`}
      >
        <Icon size={20} color={iconColor} />
      </View>

      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-1">
          <Typography variant="body1" className="flex-1 mr-2">
            {expense.merchant}
          </Typography>
          <Typography variant="body1" weight="semibold" color={colors.negative}>
            -{formatCurrency(expense.amount)}
          </Typography>
        </View>

        <View className="flex-row justify-between items-center">
          <View className="bg-backgroundTertiary px-2 py-0.5 rounded-full">
            <Typography variant="caption" className={categoryStyle.text}>
              {expense.category}
            </Typography>
          </View>
          <Typography variant="caption" color={colors.textTertiary}>
            {formatDate(expense.date)}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
}
