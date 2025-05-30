import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { colors } from "../constants/Colors";

export default function BudgetProgressBar({
  percentage,
  color = colors.primary,
  height = 8,
}) {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: percentage,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const widthInterpolated = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  return (
    <View
      className="w-full overflow-hidden rounded-md"
      style={{ height, backgroundColor: colors.backgroundTertiary }}
    >
      <Animated.View
        style={{
          width: widthInterpolated,
          height: "100%",
          backgroundColor: color,
          borderRadius: 4,
        }}
      />
    </View>
  );
}
