import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ChevronRight } from "lucide-react-native";
import image from "../../../assets/orange.jpg";
import { StatusBar } from "expo-status-bar";
export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <View className="flex-1 bg-black relative">
        {/* Background Image */}

        <Image
          source={image}
          className="absolute w-full h-full opacity-70 bg-cover r"
        />

        {/* Gradient Overlay */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)", "rgba(0,0,0,0.9)"]}
          className="absolute left-0 right-0 bottom-0 h-[75%]"
        />

        {/* Content */}
        <View className="flex-1 justify-between px-6 pt-20 pb-10">
          {/* Logo */}
          <View className="w-full  flex flex-row items-center justify-center">
            <Text
              className="text-white  font-inter-extrabold text-3xl tracking-[4px]"
              style={{ fontFamily: "Inter-ExtraBold" }}
            >
              Jyra
            </Text>
          </View>

          {/* Hero Section */}
          <View className="space-y-2 px-4">
            <Text
              className="text-neutral-200 font-black text-3xl leading-snug tracking-wide"
              style={{ fontFamily: "Inter-Black" }}
            >
              Money made simple, Goals made possible.
            </Text>
            <Text
              className="text-slate-600 font-extrabold text-2xl tracking-wide"
              style={{ fontFamily: "Inter-ExtraBold" }}
            >
              Welcome to Jyra
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
    </>
  );
}
