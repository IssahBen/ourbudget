import {
  ShoppingBag,
  Car,
  Chrome as Home,
  Utensils,
  Film,
  Lightbulb,
  HeartPulse,
  User,
  CircleHelp as HelpCircle,
  Briefcase,
  Laptop,
  Gift,
  RefreshCw,
  CreditCard,
} from "lucide-react-native";
import { colors } from "../../components/constants/Colors";

export const getCategoryIcon = (category) => {
  const categoryMap = {
    food: Utensils,
    transportation: Car,
    housing: Home,
    entertainment: Film,
    utilities: Lightbulb,
    health: HeartPulse,
    shopping: ShoppingBag,
    personal: User,
    salary: Briefcase,
    freelance: Laptop,
    investments: RefreshCw,
    gifts: Gift,
    refunds: CreditCard,
    other: HelpCircle,
  };

  return categoryMap[category.toLowerCase()] || HelpCircle;
};

export const getCategoryColor = (category) => {
  const categoryColorMap = {
    food: colors.primary,
    transportation: colors.secondary,
    housing: colors.accent,
    entertainment: "#00897B",
    utilities: "#F57C00",
    health: "#9C27B0",
    shopping: "#43A047",
    personal: "#3F51B5",
    other: "#607D8B",
  };

  return categoryColorMap[category.toLowerCase()] || colors.textSecondary;
};
