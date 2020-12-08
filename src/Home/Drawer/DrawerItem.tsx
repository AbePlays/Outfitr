import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import { RoundedIcon } from "../../components";
import { HomeRoutes } from "../../components/Navigation";
import { Box, Theme, Text, useTheme, theme } from "../../components/Theme";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface BaseDrawerItem {
  icon: string;
  color: keyof Theme["colors"];
  label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, color, label, ...props }: DrawerItemProps) => {
  const navigation = useNavigation<
    DrawerNavigationProp<HomeRoutes, "OutfitIdeas">
  >();
  const theme = useTheme();
  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() =>
        props.screen
          ? navigation.navigate(props.screen)
          : props.onPress(navigation)
      }
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
