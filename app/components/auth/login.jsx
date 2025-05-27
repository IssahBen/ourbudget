import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react-native";
import { BlurView } from "expo-blur";
import google from "../../../assets/google.png";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("main");
  };

  return (
    <SafeAreaView className="flex-1 bg-yellow-400">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View className="pt-16 px-6 pb-8">
            <Text className="font-bold text-3xl text-gray-900 mb-2">
              Welcome back
            </Text>
            <Text className="text-base text-gray-600">Sign in to continue</Text>
          </View>

          {/* Form Inputs */}
          <View className="px-6 space-y-6">
            <View
              className={`flex-row items-center bg-white rounded-lg p-4 border ${
                emailFocused ? "border-blue-600" : "border-gray-300"
              } shadow-sm`}
            >
              <Mail size={20} color={emailFocused ? "#2563EB" : "#9CA3AF"} />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-900 font-normal"
                placeholder="Email address"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>

            <View
              className={`flex-row items-center bg-white rounded-lg p-4 border  mt-5 ${
                passwordFocused ? "border-blue-600" : "border-gray-300"
              } shadow-sm`}
            >
              <Lock size={20} color={passwordFocused ? "#2563EB" : "#9CA3AF"} />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-900 font-normal"
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={20} color="#9CA3AF" />
                ) : (
                  <Eye size={20} color="#9CA3AF" />
                )}
              </TouchableOpacity>
            </View>

            <TouchableOpacity className="self-end">
              <Text className="text-sm text-blue-600 font-medium">
                Forgot password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-blue-600 rounded-lg py-4 items-center shadow-md"
              activeOpacity={0.85}
              onPress={handleSignIn}
            >
              <Text className="text-white text-lg font-semibold">Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View className="flex-row items-center my-8 px-6">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-4 text-sm text-gray-500 font-medium">OR</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Social Buttons */}
          <View className="px-6 space-y-4">
            <BlurView
              intensity={20}
              tint="light"
              className="rounded-2xl overflow-hidden shadow-md"
            >
              <TouchableOpacity className="bg-white/90 px-6 py-4 rounded-2xl border border-gray-200 flex-row justify-center items-center space-x-4">
                <Image
                  source={google}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
                <Text className="text-gray-900 font-semibold text-base">
                  Continue with Google
                </Text>
              </TouchableOpacity>
            </BlurView>
          </View>

          {/* Sign Up Link */}
          <View className="flex-row justify-center items-center mt-10 px-6 mb-8">
            <Text className="text-gray-600 text-sm">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-600 text-sm font-semibold">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
