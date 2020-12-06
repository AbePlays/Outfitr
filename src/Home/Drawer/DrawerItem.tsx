import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { RoundedIcon } from "../../components";
import { HomeRoutes } from "../../components/Navigation";
import { Box, Theme, Text, useTheme, theme } from "../../components/Theme";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export interface DrawerItemProps {
  icon: string;
  color: keyof Theme["colors"];
  label: string;
  screen: keyof HomeRoutes;
}

const DrawerItem = ({ icon, color, label, screen }: DrawerItemProps) => {
  const navigation = useNavigation<
    DrawerNavigationProp<HomeRoutes, "OutfitIdeas">
  >();
  const theme = useTheme();
  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() => navigation.navigate(screen)}
    >
      <Box flexDirection="row" alignItems="center" padding="s">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color="white"
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
