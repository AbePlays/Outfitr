import React from "react";
import { View, StyleSheet } from "react-native";

import { Box, Header, Content } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Notification from "./Notification";

const Settings = ({ navigation }: HomeNavigationProps<"Settings">) => {
  return (
    <Content>
      <Box backgroundColor="background">
        <Header
          title="Notifications"
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        />
        <Box padding="m">
          <Notification
            title="Outfit Ideas"
            description="Receive daily notification"
          />
          <Notification
            title="Discount & Sales"
            description="Buy the stuff you like for less"
          />
          <Notification
            title="Stock Notifications"
            description="If the product you 💜 comes back in stock, we'll remind you"
          />
          <Notification
            title="New Stuff"
            description="Hear it first, wear it first"
          />
        </Box>
      </Box>
    </Content>
  );
};

export default Settings;
