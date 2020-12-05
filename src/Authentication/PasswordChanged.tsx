import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import {
  Box,
  Button,
  Container,
  Text,
  RoundedIconButton,
  RoundedIcon,
} from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SIZE = 80;
const PasswordChanged = ({
  navigation,
}: StackNavigationProps<Routes, "PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            name="x"
            size={60}
            onPress={() => navigation.pop()}
            backgroundColor="white"
            color="secondary"
          />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />
        <Text variant="title1" textAlign="center" marginVertical="l">
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
