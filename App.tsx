import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeProvider } from "./src/components/Theme";
import { AuthenticationNavigator } from "./src/Authentication";
import { HomeNavigator } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Home" component={HomeNavigator} />
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
