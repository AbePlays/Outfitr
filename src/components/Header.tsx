import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import RoundedIconButton from "./RoundedIconButton";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  right: {
    icon: string;
    onPress: () => void;
  };
  title: string;
}

const Header = ({ left, right, title }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m"
      style={{ marginTop: insets.top }}
    >
      <RoundedIconButton
        size={24}
        name={left.icon}
        color="white"
        backgroundColor="secondary"
        onPress={left.onPress}
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        size={24}
        name={right.icon}
        color="white"
        backgroundColor="secondary"
        onPress={right.onPress}
      />
    </Box>
  );
};

export default Header;
