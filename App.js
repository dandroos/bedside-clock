import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from "react-native-paper";
import { store } from "./state";
import Main from "./Main";
import DatePicker from "./components/DatePicker";
import {
  useFonts,
  CutiveMono_400Regular,
} from "@expo-google-fonts/cutive-mono";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontLoaded] = useFonts({ font: CutiveMono_400Regular });

  const fontConfig = {
    default: {
      regular: {
        fontFamily: "font",
        fontWeight: "normal",
      },
    },
  };

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#444545",
      accent: "#b5ffe9",
    },
    fonts: configureFonts(fontConfig),
  };

  return fontLoaded ? (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Main />
        <DatePicker />
        <StatusBar style="auto" />
      </PaperProvider>
    </Provider>
  ) : (
    <AppLoading />
  );
}
