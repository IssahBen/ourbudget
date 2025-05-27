import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./shared/navigation/Navigation";
import { StatusBar } from "expo-status-bar";
export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
