import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import OutfitIdeas from "./OutfitIdeas";
import FavoriteOutfits from "./FavoriteOutfits";
import TransactionHistory from "./TransactionHistory";
import EditProfile from "./EditProfile";
import Settings from "./Settings";
import { HomeRoutes } from "../components/Navigation";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer/Drawer";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{ width: DRAWER_WIDTH }}
    >
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
      <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
      <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
      <Drawer.Screen name="EditProfile" component={EditProfile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
