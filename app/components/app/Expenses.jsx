import React, { useState } from "react";
import { View, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import ExpenseCard from "../expense/ExpenseCard";
import { mockExpenses } from "../../shared/utils/mockData";
import { Search, Plus, Filter } from "lucide-react-native";
import Input from "../ui/Input";
export default function ExpensesScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExpenses = mockExpenses.filter(
    (expense) =>
      expense.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (expense.description?.toLowerCase() || "").includes(
        searchQuery.toLowerCase()
      )
  );

  const totalAmount = mockExpenses
    .reduce((sum, exp) => sum + exp.amount, 0)
    .toFixed(2);

  return (
    <SafeAreaView className="flex-1 bg-backgroundSecondary">
      <View className="p-4">
        <Typography variant="h4" weight="bold" className="mb-4">
          Expenses
        </Typography>

        <Input
          placeholder="Search expenses..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          leftIcon={<Search size={18} color={colors.textSecondary} />}
        />

        <View className="flex-row justify-between items-center mt-4 mb-2">
          <TouchableOpacity className="flex-row items-center bg-backgroundTertiary px-3 py-2 rounded-lg">
            <Filter size={16} color={colors.textSecondary} />
            <Typography
              variant="body2"
              className="ml-1"
              color={colors.textSecondary}
            >
              Filter
            </Typography>
          </TouchableOpacity>

          <View className="flex-row items-center">
            <Typography variant="body2" color={colors.textSecondary}>
              Total:
            </Typography>
            <Typography
              variant="body2"
              weight="bold"
              color={colors.error}
              className="ml-1"
            >
              -${totalAmount}
            </Typography>
          </View>
        </View>
      </View>

      <FlatList
        data={filteredExpenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseCard
            expense={item}
            onPress={() => console.log(`View expense ${item.id}`)}
          />
        )}
        contentContainerStyle={{ padding: 16, paddingTop: 0 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="p-8 items-center">
            <Typography
              variant="body1"
              color={colors.textSecondary}
              align="center"
            >
              No expenses found
            </Typography>
          </View>
        }
      />

      <TouchableOpacity
        className="absolute bottom-6 right-6 bg-primary w-14 h-14 rounded-full justify-center items-center shadow-lg"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Plus color="white" size={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
