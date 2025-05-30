import React, { useState } from "react";
import { View, ScrollView, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import FinancialSummary from "../home/FinancialSummary";
import QuickActions from "../home/QuickActions";
import RecentTransactions from "../home/RecentTransactions";
import { useRouter } from "expo-router";
import { mockExpenses } from "../../shared/utils/mockData";
import TransactionForm from "../expense/TransactionForm";
import { StatusBar } from "expo-status-bar";
export default function HomeScreen() {
  const router = useRouter();
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [showIncomeModal, setShowIncomeModal] = useState(false);

  const totalExpenses = mockExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const totalIncome = 5250; // Mocked income data
  const balance = totalIncome - totalExpenses;

  const handleAddTransaction = (data) => {
    console.log("New transaction:", data);
    setShowExpenseModal(false);
    setShowIncomeModal(false);
  };

  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.backgroundSecondary }}
    >
      <ScrollView>
        <StatusBar style="dark" backgroundColor="#000" translucent={false} />
        <View className="px-4 pt-2">
          <Typography variant="h4" weight="bold">
            Hello, Alex
          </Typography>
          <Typography variant="subtitle2" color={colors.textSecondary}>
            Let's manage your finances
          </Typography>
        </View>

        <FinancialSummary
          balance={balance}
          income={totalIncome}
          expenses={totalExpenses}
        />

        <QuickActions
          onAddExpense={() => setShowExpenseModal(true)}
          onAddIncome={() => setShowIncomeModal(true)}
          onViewBudget={() => router.push("/budget")}
          onViewGoals={() => alert("Goals feature coming soon!")}
          onViewPlanned={() => alert("Planned payments feature coming soon!")}
        />

        <RecentTransactions
          transactions={mockExpenses}
          onViewAll={() => router.push("/expenses")}
          onPressTransaction={(id) => console.log(`View transaction ${id}`)}
        />
      </ScrollView>

      {/* Expense Modal */}
      <Modal
        visible={showExpenseModal}
        animationType="slide"
        transparent={true}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View
            className="max-h-[90%] pb-6 rounded-t-3xl"
            style={{ backgroundColor: colors.background }}
          >
            <TransactionForm
              isExpense={true}
              onSubmit={handleAddTransaction}
              onCancel={() => setShowExpenseModal(false)}
            />
          </View>
        </View>
      </Modal>

      {/* Income Modal */}
      <Modal visible={showIncomeModal} animationType="slide" transparent={true}>
        <View className="flex-1 justify-end bg-black/50">
          <View
            className="max-h-[90%] pb-6 rounded-t-3xl"
            style={{ backgroundColor: colors.background }}
          >
            <TransactionForm
              isExpense={false}
              onSubmit={handleAddTransaction}
              onCancel={() => setShowIncomeModal(false)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
