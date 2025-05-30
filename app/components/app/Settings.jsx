import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/Colors";
import Typography from "../ui/Typography";
import Card from "../ui/Card";
import {
  Bell,
  CreditCard,
  CircleHelp as HelpCircle,
  Lock,
  Moon,
  ChevronRight,
  LogOut,
} from "lucide-react-native";

function SettingsItem({ icon, title, subtitle, onPress, rightElement }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row justify-between items-center py-4 border-b border-gray-300"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center">
        <View className="w-10 h-10 rounded-full bg-gray-200 justify-center items-center mr-3">
          {icon}
        </View>
        <View>
          <Typography variant="body1">{title}</Typography>
          {subtitle && (
            <Typography variant="caption" color={colors.textSecondary}>
              {subtitle}
            </Typography>
          )}
        </View>
      </View>

      <View className="flex-row items-center">
        {rightElement || (
          <ChevronRight size={20} color={colors.textSecondary} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="p-4">
        <Typography variant="h4" weight="bold">
          Settings
        </Typography>
      </View>

      <ScrollView className="px-4" showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <Card variant="elevated" className="mb-6">
          <View className="flex-row items-center mb-4">
            <View className="w-16 h-16 rounded-full bg-primary justify-center items-center mr-4">
              <Typography variant="h3" color={colors.backgroundSecondary}>
                A
              </Typography>
            </View>
            <View className="flex-1">
              <Typography variant="h5">Alex Johnson</Typography>
              <Typography variant="body2" color={colors.textSecondary}>
                alex.johnson@example.com
              </Typography>
            </View>
          </View>
          <TouchableOpacity
            className="self-start py-2 px-4 bg-primaryLightest rounded-lg"
            activeOpacity={0.7}
          >
            <Typography variant="button" color={colors.primary}>
              Edit Profile
            </Typography>
          </TouchableOpacity>
        </Card>

        {/* Preferences Section */}
        <Typography
          variant="overline"
          color={colors.textSecondary}
          className="mb-2 px-1"
        >
          PREFERENCES
        </Typography>

        <Card variant="outline" className="mb-6">
          <SettingsItem
            icon={<CreditCard size={20} color={colors.primary} />}
            title="Payment Methods"
            subtitle="Manage your payment options"
            onPress={() => console.log("Payment methods")}
          />
          <SettingsItem
            icon={<Bell size={20} color={colors.secondary} />}
            title="Notifications"
            subtitle="Configure alerts and reminders"
            onPress={() => console.log("Notifications")}
          />
          <SettingsItem
            icon={<Moon size={20} color={colors.accent} />}
            title="Dark Mode"
            onPress={() => setIsDarkMode(!isDarkMode)}
            rightElement={
              <Switch
                value={isDarkMode}
                onValueChange={setIsDarkMode}
                trackColor={{ false: colors.border, true: colors.primaryLight }}
                thumbColor={
                  isDarkMode ? colors.primary : colors.backgroundSecondary
                }
              />
            }
          />
        </Card>

        {/* Security & Support Section */}
        <Typography
          variant="overline"
          color={colors.textSecondary}
          className="mb-2 px-1"
        >
          SECURITY & SUPPORT
        </Typography>

        <Card variant="outline" className="mb-6">
          <SettingsItem
            icon={<Lock size={20} color={colors.primary} />}
            title="Privacy & Security"
            onPress={() => console.log("Privacy & Security")}
          />
          <SettingsItem
            icon={<HelpCircle size={20} color={colors.secondary} />}
            title="Help & Support"
            onPress={() => console.log("Help & Support")}
          />
        </Card>

        {/* Log Out Button */}
        <TouchableOpacity
          className="flex-row items-center justify-center py-4 mb-6"
          activeOpacity={0.7}
          onPress={() => console.log("Log Out")}
        >
          <LogOut size={20} color={colors.error} />
          <Typography variant="button" color={colors.error} className="ml-2">
            Log Out
          </Typography>
        </TouchableOpacity>

        {/* App Version */}
        <Typography
          variant="caption"
          color={colors.textTertiary}
          align="center"
          className="mb-8"
        >
          Version 1.0.0
        </Typography>
      </ScrollView>
    </SafeAreaView>
  );
}
