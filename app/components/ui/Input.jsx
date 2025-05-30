import React from "react";
import { TextInput, View, Text } from "react-native";

export default function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  helper,
  className = "",
  inputClassName = "",
  ...props
}) {
  return (
    <View className="mb-4">
      {label && (
        <Text className="text-base text-text font-[Inter-Medium] mb-1.5">
          {label}
        </Text>
      )}

      <View
        className={`flex-row items-center border rounded-lg bg-background 
          ${error ? "border-error" : "border-border"} ${className}`}
      >
        {leftIcon && <View className="pl-3">{leftIcon}</View>}

        <TextInput
          className={`flex-1 h-12 text-base text-text font-[Inter-Regular] px-4
            ${leftIcon ? "pl-2" : ""} ${
            rightIcon ? "pr-2" : ""
          } ${inputClassName}`}
          placeholderTextColor="#9CA3AF" // fallback for tertiary text
          {...props}
        />

        {rightIcon && <View className="pr-3">{rightIcon}</View>}
      </View>

      {!error && helper && (
        <Text className="text-xs text-text-secondary font-[Inter-Regular] mt-1">
          {helper}
        </Text>
      )}
      {error && (
        <Text className="text-xs text-error font-[Inter-Regular] mt-1">
          {error}
        </Text>
      )}
    </View>
  );
}
