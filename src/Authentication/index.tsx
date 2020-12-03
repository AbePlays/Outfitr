import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "../components/Navigation";
import OnBoarding from "./OnBoarding";
import Welcome from "./Welcome";

const AuthenticationStack = createStackNavigator<Routes>();

export { default as OnBoarding } from "./OnBoarding";
export { default as Welcome } from "./Welcome";
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};
