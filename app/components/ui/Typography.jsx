import React from "react";
import { Text } from "react-native";

const variantStyles = {
  h1: "text-[32px] leading-[38px] font-[Inter-Bold] text-text",
  h2: "text-[28px] leading-[34px] font-[Inter-Bold] text-text",
  h3: "text-[24px] leading-[30px] font-[Inter-SemiBold] text-text",
  h4: "text-[20px] leading-[26px] font-[Inter-SemiBold] text-text",
  h5: "text-[18px] leading-[24px] font-[Inter-Medium] text-text",
  h6: "text-[16px] leading-[22px] font-[Inter-Medium] text-text",
  subtitle1:
    "text-[16px] leading-[22px] font-[Inter-Medium] text-text-secondary",
  subtitle2:
    "text-[14px] leading-[20px] font-[Inter-Medium] text-text-secondary",
  body1: "text-[16px] leading-[24px] font-[Inter-Regular] text-text",
  body2: "text-[14px] leading-[21px] font-[Inter-Regular] text-text",
  body3: "text-[12px] leading-[18px] font-[Inter-Regular] text-text",
  caption:
    "text-[12px] leading-[16px] font-[Inter-Regular] text-text-secondary",
  overline:
    "text-[10px] leading-[14px] font-[Inter-Medium] tracking-[1px] uppercase text-text-secondary",
  button: "text-[14px] leading-[20px] font-[Inter-Medium] text-text",
};

const colorMap = {
  text: "text-text",
  textSecondary: "text-text-secondary",
  error: "text-error",
  positive: "text-positive",
  negative: "text-negative",
};

const weightMap = {
  regular: "font-[Inter-Regular]",
  medium: "font-[Inter-Medium]",
  semibold: "font-[Inter-SemiBold]",
  bold: "font-[Inter-Bold]",
};

export default function Typography({
  children,
  variant = "body1",
  color,
  align,
  weight,
  className = "",
  ...props
}) {
  // Determine font weight override if specified
  let weightClass = weight ? weightMap[weight.toLowerCase()] : null;

  // Determine color class from the passed color string if it matches map keys
  let colorClass = color ? colorMap[color] || "" : "";

  return (
    <Text
      className={`${variantStyles[variant] || variantStyles.body1} ${
        weightClass || ""
      } ${colorClass} ${align ? `text-${align}` : ""} ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
}
