import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, Button, Container, Text, CloseButton } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
        <Box
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          backgroundColor="primaryLight"
          justifyContent="center"
          alignItems="center"
          marginBottom="xl"
        >
          <Text color="primary">
            <Icon name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close the window and try again
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Login again"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
