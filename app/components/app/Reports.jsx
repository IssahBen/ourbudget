import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import Card from "../ui/Card";
import { mockExpenses, mockBudgets } from "../../shared/utils/mockData";
import { formatCurrency } from "../../shared/utils/formatters";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { getCategoryColor } from "../../shared/utils/categoryIcons";

function PieChartPlaceholder() {
  const categories = mockExpenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += expense.amount;
    return acc;
  }, {});

  const total = Object.values(categories).reduce(
    (sum, amount) => sum + amount,
    0
  );

  return (
    <View className="items-center">
      <View
        className="w-[150px] h-[150px] rounded-full justify-center items-center mb-6"
        style={{
          backgroundColor: colors.primaryLightest,
          borderWidth: 25,
          borderColor: colors.secondary,
          transform: [{ rotate: "45deg" }],
        }}
      >
        <View
          className="w-[65%] h-[65%] rounded-[50px]"
          style={{ backgroundColor: colors.background }}
        />
      </View>

      <View className="w-full">
        {Object.entries(categories).map(([category, amount]) => (
          <View key={category} className="flex-row items-center mb-2">
            <View
              className="w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: getCategoryColor(category) }}
            />
            <View className="flex-row flex-1 justify-between">
              <Typography variant="body2">{category}</Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                {formatCurrency(amount)} ({((amount / total) * 100).toFixed(0)}
                %)
              </Typography>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

function BarChartPlaceholder() {
  return (
    <View className="h-[200px] flex-row pb-4">
      <View className="w-10 justify-between items-end pr-2 py-2">
        <Typography variant="caption" color={colors.textTertiary}>
          $1000
        </Typography>
        <Typography variant="caption" color={colors.textTertiary}>
          $500
        </Typography>
        <Typography variant="caption" color={colors.textTertiary}>
          $0
        </Typography>
      </View>

      <View className="flex-1 flex-row justify-around items-end">
        {["Week 1", "Week 2", "Week 3", "Week 4"].map((week) => (
          <View key={week} className="items-center justify-end w-[30px]">
            <View
              className="w-[80%] rounded-t-md"
              style={{
                backgroundColor: colors.primary,
                height: 40 + Math.random() * 100,
              }}
            />
            <Typography
              variant="caption"
              color={colors.textSecondary}
              className="mt-2"
            >
              {week}
            </Typography>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function ReportsScreen() {
  const [currentMonth, setCurrentMonth] = useState("July 2025");

  const totalExpenses = mockExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const totalBudget = mockBudgets.reduce(
    (sum, budget) => sum + budget.limit,
    0
  );
  const savingsRate = ((1 - totalExpenses / totalBudget) * 100).toFixed(1);

  return (
    <SafeAreaView className="flex-1 bg-backgroundSecondary">
      <View className="p-4">
        <Typography variant="h4" weight="bold">
          Insights
        </Typography>
        <Typography variant="subtitle2" color={colors.textSecondary}>
          Your financial analytics
        </Typography>
      </View>

      <View className="flex-row justify-between items-center mx-4 mb-4 px-6">
        <TouchableOpacity>
          <ChevronLeft size={24} color={colors.textSecondary} />
        </TouchableOpacity>

        <Typography variant="h6">{currentMonth}</Typography>

        <TouchableOpacity>
          <ChevronRight size={24} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>

      <ScrollView className="p-4" showsVerticalScrollIndicator={false}>
        <Card variant="elevated" className="mb-6">
          <Typography variant="h5" className="mb-4">
            Expense Breakdown
          </Typography>
          <PieChartPlaceholder />
        </Card>

        <Card variant="elevated" className="mb-6">
          <Typography variant="h5" className="mb-4">
            Weekly Spending
          </Typography>
          <BarChartPlaceholder />
        </Card>

        <Card variant="elevated" className="mb-6">
          <Typography variant="h5" className="mb-4">
            Financial Health
          </Typography>

          <View className="flex-row">
            <View className="flex-1 items-center justify-center p-4">
              <Typography variant="h3" color={colors.primary}>
                {savingsRate}%
              </Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                Savings Rate
              </Typography>
            </View>

            <View className="flex-1 items-center justify-center p-4">
              <Typography
                variant="h3"
                color={
                  totalBudget > totalExpenses ? colors.success : colors.error
                }
              >
                {formatCurrency(Math.abs(totalBudget - totalExpenses))}
              </Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                {totalBudget > totalExpenses ? "Under Budget" : "Over Budget"}
              </Typography>
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
