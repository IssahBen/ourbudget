import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../../components/auth/login";
import SignUpScreen from "../../components/auth/sign-up";
import WelcomeScreen from "../../components/auth";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import ExpensesScreen from "../../components/app/Expenses";
import { colors } from "../../components/constants/Colors";
import { StyleSheet } from "nativewind";
import {
  Home,
  ChartBar as BarChart4,
  CreditCard,
  Wallet,
  Settings,
} from "lucide-react-native";
import BudgetScreen from "../../components/app/Budget";
import HomeScreen from "../../components/app/Home";
import ReportsScreen from "../../components/app/Reports";
import SettingsScreen from "../../components/app/Settings";
import { Platform } from "react-native";
import { BlurView } from "expo-blur";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Tabs() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const renderTabBarBackground = () => {
    if (Platform.OS === "ios") {
      return (
        <BlurView intensity={90} tint="light" style={StyleSheet.absoluteFill} />
      );
    }
    return null;
  };
  // eslint-disable-next-line no-unused-vars
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle:
          Platform.OS === "ios"
            ? {}
            : {
                backgroundColor: colors.background,
                borderTopWidth: 0.5,
                borderTopColor: colors.border,
              },
        tabBarBackground: renderTabBarBackground,
        tabBarLabelStyle: {
          fontFamily: "Inter-Medium",
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Main"
        component={EntryStack}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="log-in-outline" size={24} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          // tabPress: (e) => {
          //   e.preventDefault();
          //   if (isLoggedIn) {
          //     navigation.navigate("budget");
          //   } else {
          //     navigation.navigate("Main");
          //   }
          // },
        })}
      />

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
        listeners={({ navigation }) => ({
          // tabPress: (e) => {
          //   e.preventDefault();
          //   if (isLoggedIn) {
          //     navigation.navigate("Home");
          //   } else {
          //     navigation.navigate("Main");
          //   }
          // },
        })}
      />
      <Tab.Screen
        name="Expense"
        component={ExpensesScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <CreditCard size={size} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          // tabPress: (e) => {
          //   e.preventDefault();
          //   if (isLoggedIn) {
          //     navigation.navigate("Expense");
          //   } else {
          //     navigation.navigate("Main");
          //   }
          // },
        })}
      />
      <Tab.Screen
        name="budget"
        component={BudgetScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => <Wallet size={size} color={color} />,
        }}
        listeners={({ navigation }) => ({
          // tabPress: (e) => {
          //   e.preventDefault();
          //   if (isLoggedIn) {
          //     navigation.navigate("budget");
          //   } else {
          //     navigation.navigate("Main");
          //   }
          // },
        })}
      />
      <Tab.Screen
        name="reports"
        component={ReportsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <BarChart4 size={size} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          // tabPress: (e) => {
          //   e.preventDefault();
          //   if (isLoggedIn) {
          //     navigation.navigate("reports");
          //   } else {
          //     navigation.navigate("Main");
          //   }
          // },
        })}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          // tabPress: (e) => {
          //   e.preventDefault();
          //   if (isLoggedIn) {
          //     navigation.navigate("settings");
          //   } else {
          //     navigation.navigate("Main");
          //   }
          // },
        })}
      />
    </Tab.Navigator>
  );
}

function EntryStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signin"
        component={SignInScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerTintColor: "black", // makes the back arrow white
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />

      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerTintColor: "black", // back arrow color
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack.Navigator>
  );
}
