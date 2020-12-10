import React, { useState } from "react";
import { Switch } from "react-native";
import { Box, Text, useTheme } from "../../components";

interface NotificationProps {
  title: string;
  description: string;
}

const Notification = ({ title, description }: NotificationProps) => {
  const [toggle, setToggle] = useState(false);
  const theme = useTheme();

  return (
    <Box flexDirection="row" marginBottom="m">
      <Box flex={1} justifyContent="center">
        <Text variant="title3">{title}</Text>
        <Text variant="body">{description}</Text>
      </Box>
      <Box width={20} />
      <Box paddingVertical="m">
        <Switch
          value={toggle}
          trackColor={{
            true: theme.colors.primary,
            false: theme.colors.background2,
          }}
          onValueChange={() => setToggle((prev) => !prev)}
        />
      </Box>
    </Box>
  );
};

export default Notification;
