import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../ui/Typography";
import BudgetCard from "../budget/BudgetCard";
import Card from "../ui/Card";
import { mockBudgets } from "../../shared/utils/mockData";
import { Plus } from "lucide-react-native";
import { formatCurrency } from "../../shared/utils/formatters";

export default function BudgetScreen() {
  const totalBudget = mockBudgets.reduce(
    (sum, budget) => sum + budget.limit,
    0
  );
  const totalSpent = mockBudgets.reduce((sum, budget) => sum + budget.spent, 0);
  const remainingBudget = totalBudget - totalSpent;
  const completionPercentage = ((totalSpent / totalBudget) * 100).toFixed(0);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="px-4 py-5">
        <Typography variant="h4" weight="bold">
          Budget
        </Typography>
        <Typography variant="subtitle2" className="text-gray-500">
          July 2025
        </Typography>
      </View>

      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        <Card variant="elevated" className="mb-6">
          <View className="flex-row justify-between py-3">
            <View className="flex-1">
              <Typography variant="body2" className="text-gray-500">
                Total Budget
              </Typography>
              <Typography variant="h5">
                {formatCurrency(totalBudget)}
              </Typography>
            </View>
            <View className="flex-1">
              <Typography variant="body2" className="text-gray-500">
                Spent
              </Typography>
              <Typography variant="h5" className="text-red-500">
                {formatCurrency(totalSpent)}
              </Typography>
            </View>
          </View>

          <View className="flex-row justify-between py-3">
            <View className="flex-1">
              <Typography variant="body2" className="text-gray-500">
                Remaining
              </Typography>
              <Typography
                variant="h5"
                className={
                  remainingBudget >= 0 ? "text-green-600" : "text-red-500"
                }
              >
                {formatCurrency(Math.abs(remainingBudget))}
              </Typography>
            </View>
            <View className="flex-1">
              <Typography variant="body2" className="text-gray-500">
                Completion
              </Typography>
              <Typography variant="h5">{completionPercentage}%</Typography>
            </View>
          </View>
        </Card>

        <View className="flex-row justify-between items-center mb-4">
          <Typography variant="h5">Categories</Typography>
        </View>

        {mockBudgets.map((budget) => (
          <BudgetCard
            key={budget.id}
            budget={budget}
            onPress={() => console.log(`View budget ${budget.id}`)}
          />
        ))}
      </ScrollView>

      <TouchableOpacity className="absolute bottom-6 right-6 bg-blue-600 w-14 h-14 rounded-full justify-center items-center shadow-md">
        <Plus color="white" size={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
