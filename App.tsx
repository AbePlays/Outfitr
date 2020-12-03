import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";

import { theme } from "./src/components";
import { AuthenticationNavigator } from "./src/Authentication";

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
