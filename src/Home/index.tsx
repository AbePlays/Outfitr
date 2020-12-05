import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import OutfitIdeas from "./OutfitIdeas";

const Drawer = createDrawerNavigator();

export const HomeNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
  );
};
