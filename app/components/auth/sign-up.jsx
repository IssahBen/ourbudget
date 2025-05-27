import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeft,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Check,
} from "lucide-react-native";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = () => {
    navigation.navigate("main");
  };

  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  const passwordStrength = [
    hasMinLength,
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecialChar,
  ].filter(Boolean).length;

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "";
    if (passwordStrength < 3) return "Weak";
    if (passwordStrength < 5) return "Good";
    return "Strong";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return "#E5E7EB";
    if (passwordStrength < 3) return "#EF4444"; // red
    if (passwordStrength < 5) return "#F59E0B"; // amber
    return "#10B981"; // green
  };

  return (
    <SafeAreaView className="flex-1 bg-yellow-400">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}>
          <View className="pt-16 px-6 pb-8">
            <Text className="text-[28px] text-gray-900 font-bold mb-2">
              Create Account
            </Text>
            <Text className="text-base text-gray-500 font-regular">
              Sign up to get started
            </Text>
          </View>

          <View className="px-6 gap-4">
            <View
              className={`flex-row items-center bg-white rounded-xl p-4 border ${
                nameFocused ? "border-violet-500" : "border-gray-200"
              } shadow-sm`}
            >
              <User size={20} color={nameFocused ? "#8B5CF6" : "#9CA3AF"} />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-900 font-regular"
                placeholder="Full name"
                placeholderTextColor="#9CA3AF"
                value={name}
                onChangeText={setName}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
              />
            </View>

            <View
              className={`flex-row items-center bg-white rounded-xl p-4 border ${
                emailFocused ? "border-violet-500" : "border-gray-200"
              } shadow-sm`}
            >
              <Mail size={20} color={emailFocused ? "#8B5CF6" : "#9CA3AF"} />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-900 font-regular"
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
              className={`flex-row items-center bg-white rounded-xl p-4 border ${
                passwordFocused ? "border-violet-500" : "border-gray-200"
              } shadow-sm`}
            >
              <Lock size={20} color={passwordFocused ? "#8B5CF6" : "#9CA3AF"} />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-900 font-regular"
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

            {password.length > 0 && (
              <View className="flex-row items-center justify-between -mt-2">
                <View className="flex-row space-x-1 flex-1">
                  {[1, 2, 3, 4, 5].map((bar) => (
                    <View
                      key={bar}
                      className="flex-1 h-1 rounded"
                      style={{
                        backgroundColor:
                          bar <= passwordStrength
                            ? getPasswordStrengthColor()
                            : "#E5E7EB",
                      }}
                    />
                  ))}
                </View>
                <Text
                  className="ml-2 text-sm font-medium"
                  style={{ color: getPasswordStrengthColor() }}
                >
                  {getPasswordStrengthText()}
                </Text>
              </View>
            )}

            <TouchableOpacity
              className="flex-row items-start mt-2"
              onPress={() => setAgreeToTerms(!agreeToTerms)}
              activeOpacity={0.8}
            >
              <View
                className={`w-5 h-5 rounded border border-gray-300 mr-2 items-center justify-center ${
                  agreeToTerms ? "bg-violet-500 border-violet-500" : ""
                }`}
              >
                {agreeToTerms && <Check size={14} color="#fff" />}
              </View>
              <Text className="text-sm text-gray-500 leading-5 font-regular">
                I agree to the{" "}
                <Text className="font-medium text-violet-500">
                  Terms of Service
                </Text>{" "}
                and{" "}
                <Text className="font-medium text-violet-500">
                  Privacy Policy
                </Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`rounded-xl p-4 items-center mt-4 ${
                !agreeToTerms || !email || !password || !name
                  ? "bg-gray-300"
                  : "bg-violet-500"
              }`}
              onPress={handleSignUp}
              disabled={!agreeToTerms || !email || !password || !name}
            >
              <Text className="text-base text-white font-semibold">
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center items-center mt-8">
            <Text className="text-sm text-gray-500">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("signin")}>
              <Text className="text-sm font-semibold text-violet-500">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
