import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { RoundedIcon } from "../../components";
import { HomeRoutes } from "../../components/Navigation";
import { Box, Theme, Text, useTheme } from "../../components/Theme";

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
        "screen" in props
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
          color="background"
        />
        <Text variant="button" color="secondary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
