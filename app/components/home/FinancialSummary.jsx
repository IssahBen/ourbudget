import React from "react";
import { View } from "react-native";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import Card from "../ui/Card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react-native";
import { formatCurrency } from "../../shared/utils/formatters";

export default function FinancialSummary({
  balance,
  income,
  expenses,
  period = "This Month",
}) {
  return (
    <Card variant="elevated" className="p-5 mb-6">
      <View className="items-center mb-6">
        <Typography variant="subtitle2" color={colors.textSecondary}>
          {period}
        </Typography>
        <Typography variant="h3" className="my-2">
          {formatCurrency(balance)}
        </Typography>
        <Typography
          variant="subtitle2"
          color={balance >= 0 ? colors.success : colors.error}
        >
          {balance >= 0 ? "Available Balance" : "Negative Balance"}
        </Typography>
      </View>

      <View className="flex-row justify-between">
        <View className="flex-row items-center">
          <View
            className="w-10 h-10 rounded-full justify-center items-center mr-3"
            style={{ backgroundColor: "rgba(16, 185, 129, 0.1)" }}
          >
            <ArrowUpRight color={colors.success} size={20} />
          </View>
          <View>
            <Typography variant="body2" color={colors.textSecondary}>
              Income
            </Typography>
            <Typography variant="h6" color={colors.success}>
              {formatCurrency(income)}
            </Typography>
          </View>
        </View>

        <View className="flex-row items-center">
          <View
            className="w-10 h-10 rounded-full justify-center items-center mr-3"
            style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
          >
            <ArrowDownRight color={colors.error} size={20} />
          </View>
          <View>
            <Typography variant="body2" color={colors.textSecondary}>
              Expenses
            </Typography>
            <Typography variant="h6" color={colors.error}>
              {formatCurrency(expenses)}
            </Typography>
          </View>
        </View>
      </View>
    </Card>
  );
}
