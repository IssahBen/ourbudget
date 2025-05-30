import React from "react";
import { View } from "react-native";

export default function Card({
  children,
  variant = "default",
  padding = "medium",
  className = "",
  ...props
}) {
  const baseClass = "rounded-2xl overflow-hidden";

  const variantClass = {
    default: "bg-background-secondary",
    outline: "bg-background border border-border",
    elevated: "bg-background shadow-sm shadow-black/10",
  };

  const paddingClass = {
    none: "p-0",
    small: "p-2",
    medium: "p-4",
    large: "p-6",
  };

  return (
    <View
      className={`${baseClass} ${variantClass[variant]} ${paddingClass[padding]} ${className}`}
      {...props}
    >
      {children}
    </View>
  );
}
