import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import ExpenseCard from "../expense/ExpenseCard";
import { ChevronRight } from "lucide-react-native";

export default function RecentTransactions({
  transactions,
  onViewAll,
  onPressTransaction,
}) {
  if (!transactions.length) {
    return (
      <View className="px-8 py-16 justify-center items-center">
        <Typography variant="body1" color={colors.textSecondary} align="center">
          No recent transactions
        </Typography>
      </View>
    );
  }

  return (
    <View className="mb-6">
      <View className="flex-row justify-between items-center mb-4">
        <Typography variant="h5">Recent Transactions</Typography>
        <TouchableOpacity onPress={onViewAll} className="flex-row items-center">
          <Typography variant="body2" color={colors.primary}>
            View All
          </Typography>
          <ChevronRight size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={transactions.slice(0, 5)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseCard
            expense={item}
            onPress={() => onPressTransaction(item.id)}
          />
        )}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
