import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight } from "lucide-react-native";
import image from "../../../assets/bgpilot.jpg";
import image2 from "../../../assets/piggy.jpg";
export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-black relative">
      {/* Background Image */}
      <Image source={image} className="absolute w-full h-full opacity-70" />

      {/* Gradient Overlay */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.7)", "rgba(0,0,0,0.9)"]}
        className="absolute left-0 right-0 bottom-0 h-[75%]"
      />

      {/* Content */}
      <View className="flex-1 justify-between px-6 pt-20 pb-10">
        {/* Logo */}
        <Text
          className="text-white text-2xl tracking-[4px]"
          style={{ fontFamily: "Inter-ExtraBold" }}
        >
          Jyra
        </Text>

        {/* Hero Section */}
        <View className="space-y-4">
          <Text
            className="text-white text-4xl leading-tight"
            style={{ fontFamily: "Inter-Bold" }}
          >
            Elevate Your Experience
          </Text>
          <Text
            className="text-neutral-300 text-base leading-6"
            style={{ fontFamily: "Inter-Regular" }}
          >
            Start your journey to smarter spending, clearer goals, and real
            financial peace. With our budgeting tools, every dollar has a
            purpose—and so do you.
          </Text>
        </View>

        {/* Action Buttons */}
        <View className=" mt-8">
          <TouchableOpacity
            onPress={() => navigation.navigate("signin")}
            activeOpacity={0.8}
            className="py-4 items-center border border-white/40 bg-white/10 shadow-md mb-5"
            style={{ borderRadius: 4 }}
          >
            <Text
              className="text-white text-base"
              style={{ fontFamily: "Inter-SemiBold" }}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("signup")}
            activeOpacity={0.9}
            className="py-4 px-6 flex-row items-center justify-center bg-blue-700 shadow-lg"
            style={{ borderRadius: 4 }}
          >
            <Text
              className="text-white text-base mr-3"
              style={{ fontFamily: "Inter-SemiBold" }}
            >
              Create Account
            </Text>
            <ChevronRight size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("guest")}
            activeOpacity={0.7}
            className="items-center mt-2"
          >
            <Text
              className="text-white/70 text-sm underline"
              style={{ fontFamily: "Inter-Medium" }}
            >
              Explore as Guest
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
