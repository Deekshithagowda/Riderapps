import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./global.css";
import RouteHandler from "./src/app/router";
import { useFonts } from "expo-font";
import { font_fam } from "./src/app/utils/styles/fontFamily";

export default function App() {
  const [fontsLoaded] = useFonts({
    [font_fam.as_bold]: require("./assets/fonts/Alegreya/AlegreyaSansSC-Bold.ttf"),
    [font_fam.telex_reg]: require("./assets/fonts/Telex/Telex-Regular.ttf"),
    // 'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  return (
    <SafeAreaProvider>
      <StatusBar translucent />
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <RouteHandler />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
