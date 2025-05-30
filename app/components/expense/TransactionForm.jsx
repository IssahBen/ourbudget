import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { DollarSign as Dollar, Calendar } from "lucide-react-native";
import { format } from "date-fns";

export default function TransactionForm({
  isExpense = true,
  onSubmit,
  onCancel,
}) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [category, setCategory] = useState("");
  const [merchant, setMerchant] = useState("");

  const categories = isExpense
    ? [
        "Food",
        "Transportation",
        "Housing",
        "Entertainment",
        "Utilities",
        "Health",
        "Shopping",
        "Personal",
        "Other",
      ]
    : ["Salary", "Freelance", "Investments", "Gifts", "Refunds", "Other"];

  const handleSubmit = () => {
    if (!amount || !description || !category) return;

    onSubmit({
      amount: parseFloat(amount),
      description,
      date,
      category,
      merchant: merchant || description,
      type: isExpense ? "expense" : "income",
    });
  };

  return (
    <ScrollView className="p-4">
      <Typography variant="h4" className="mb-6">
        {isExpense ? "New Expense" : "New Income"}
      </Typography>

      <Input
        label="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        leftIcon={<Dollar size={18} color={colors.textSecondary} />}
        placeholder={
          isExpense ? "How much did you spend?" : "How much did you receive?"
        }
      />

      <Input
        label={isExpense ? "Merchant" : "Source"}
        value={merchant}
        onChangeText={setMerchant}
        placeholder={
          isExpense ? "Where did you spend it?" : "Where did it come from?"
        }
      />

      <Input
        label="Description"
        value={description}
        onChangeText={setDescription}
        placeholder="What was it for?"
      />

      <Input
        label="Date"
        value={date}
        onChangeText={setDate}
        leftIcon={<Calendar size={18} color={colors.textSecondary} />}
        placeholder="YYYY-MM-DD"
      />

      <Typography variant="body2" className="mt-2 mb-2 font-medium">
        Category
      </Typography>

      <View className="flex-row flex-wrap mb-6">
        {categories.map((cat) => {
          const selected = category === cat;
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-full mr-2 mb-2 ${
                selected ? "bg-primary" : "bg-backgroundTertiary"
              }`}
            >
              <Typography
                variant="body3"
                className={selected ? "text-background" : "text-text"}
              >
                {cat}
              </Typography>
            </TouchableOpacity>
          );
        })}
      </View>

      <View className="flex-row justify-between mt-4">
        <View className="flex-1 mr-2">
          <Button title="Cancel" variant="outline" onPress={onCancel} />
        </View>

        <View className="flex-1 ml-2">
          <Button title="Save" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
}
