import React from "react";
import { View, TouchableOpacity } from "react-native";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import {
  CirclePlus as PlusCircle,
  CircleArrowUp as ArrowUpCircle,
  ChartBar,
  Target,
  Calendar,
} from "lucide-react-native";

function ActionItem({ icon, label, onPress, backgroundColor }) {
  return (
    <TouchableOpacity
      className="items-center w-16"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        className="w-12 h-12 rounded-full justify-center items-center mb-2"
        style={{ backgroundColor }}
      >
        {icon}
      </View>
      <Typography variant="caption" align="center">
        {label}
      </Typography>
    </TouchableOpacity>
  );
}

export default function QuickActions({
  onAddExpense,
  onAddIncome,
  onViewBudget,
  onViewGoals,
  onViewPlanned,
}) {
  return (
    <View className="flex-row justify-between py-4 mb-6">
      <ActionItem
        icon={<PlusCircle size={24} color={colors.error} />}
        label="Expense"
        onPress={onAddExpense}
        backgroundColor="rgba(239, 68, 68, 0.1)"
      />
      <ActionItem
        icon={<ArrowUpCircle size={24} color={colors.success} />}
        label="Income"
        onPress={onAddIncome}
        backgroundColor="rgba(16, 185, 129, 0.1)"
      />
      <ActionItem
        icon={<ChartBar size={24} color={colors.primary} />}
        label="Budget"
        onPress={onViewBudget}
        backgroundColor="rgba(15, 118, 110, 0.1)"
      />
      <ActionItem
        icon={<Target size={24} color={colors.secondary} />}
        label="Goals"
        onPress={onViewGoals}
        backgroundColor="rgba(126, 34, 206, 0.1)"
      />
      <ActionItem
        icon={<Calendar size={24} color={colors.accent} />}
        label="Planned"
        onPress={onViewPlanned}
        backgroundColor="rgba(249, 115, 22, 0.1)"
      />
    </View>
  );
}
