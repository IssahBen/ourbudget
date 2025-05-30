import React from "react";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { colors } from "../constants/Colors";

export default function Button({
  title,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isLoading = false,
  isDisabled = false,
  fullWidth = false,
  className = "",
  ...props
}) {
  const baseClass =
    "flex-row items-center justify-center rounded-lg" +
    (fullWidth ? " w-full" : "");

  const variants = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    outline: "bg-transparent border border-primary",
    ghost: "bg-transparent",
  };

  const textVariants = {
    primary: "text-white",
    secondary: "text-white",
    outline: "text-primary",
    ghost: "text-primary",
  };

  const sizes = {
    sm: "py-2 px-3",
    md: "py-3 px-4",
    lg: "py-4 px-6",
  };

  const textSizes = {
    sm: "text-xs leading-4",
    md: "text-sm leading-5",
    lg: "text-base leading-6",
  };

  return (
    <TouchableOpacity
      disabled={isDisabled || isLoading}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled || isLoading }}
      accessibilityLabel={title}
      className={`${baseClass} ${variants[variant]} ${sizes[size]} ${
        isDisabled ? "opacity-50" : ""
      } ${className}`}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          color={
            variant === "outline" || variant === "ghost"
              ? colors.primary
              : "#fff"
          }
          size="small"
        />
      ) : (
        <View className="flex-row items-center justify-center">
          {leftIcon && <View className="mr-2">{leftIcon}</View>}
          <Text
            className={`font-[Inter-Medium] text-center ${textVariants[variant]} ${textSizes[size]}`}
          >
            {title}
          </Text>
          {rightIcon && <View className="ml-2">{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
}
