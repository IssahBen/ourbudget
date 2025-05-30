import React from "react";
import { View, Pressable } from "react-native";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import Card from "../ui/Card";
import { formatCurrency } from "../../shared/utils/formatters";
import BudgetProgressBar from "./BudgetProgressBar";

export default function BudgetCard({ budget, onPress }) {
  const spentPercentage = (budget.spent / budget.limit) * 100;
  const remaining = budget.limit - budget.spent;

  let statusColor = colors.success;
  if (spentPercentage >= 85) {
    statusColor = colors.error;
  } else if (spentPercentage >= 70) {
    statusColor = colors.warning;
  }

  return (
    <Pressable onPress={onPress}>
      <Card variant="elevated" className="mb-4">
        <View className="flex-row justify-between items-center mb-2">
          <Typography variant="h6">{budget.category}</Typography>
          <Typography variant="subtitle2" color={statusColor}>
            {spentPercentage > 100
              ? "Over Budget"
              : spentPercentage > 85
              ? "Almost Full"
              : "On Track"}
          </Typography>
        </View>

        <View className="flex-row justify-between mb-2">
          <Typography variant="body1" color={colors.textSecondary}>
            {formatCurrency(budget.spent)}
          </Typography>
          <Typography variant="body1" color={colors.textSecondary}>
            of {formatCurrency(budget.limit)}
          </Typography>
        </View>

        <BudgetProgressBar
          percentage={Math.min(spentPercentage, 100)}
          color={statusColor}
        />

        <View className="flex-row justify-between items-center mt-2">
          <Typography
            variant="body2"
            color={remaining < 0 ? colors.error : colors.textSecondary}
          >
            {remaining < 0
              ? `${formatCurrency(Math.abs(remaining))} over`
              : `${formatCurrency(remaining)} remaining`}
          </Typography>
          <Typography variant="caption">
            {budget.endDate ? `Ends on ${budget.endDate}` : "Monthly"}
          </Typography>
        </View>
      </Card>
    </Pressable>
  );
}
