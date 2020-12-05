import React from "react";
import { Image, Dimensions } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { Button } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";
import { Box, Text, useTheme } from "../components/Theme";

const { width } = Dimensions.get("window");
const picture = {
  src: require("../../assets/5.png"),
  width: 3383,
  height: 5074,
};

const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Box
            backgroundColor="white"
            borderTopLeftRadius="xl"
            flex={1}
            justifyContent="space-evenly"
            alignItems="center"
            padding="xl"
          >
            <Text variant="title2">Let's get started</Text>
            <Text variant="body" textAlign="center">
              Login to your account below or signup for an amazing experience
            </Text>
            <Button
              variant="primary"
              label="Have an account? Login"
              onPress={() => navigation.navigate("Login")}
            ></Button>
            <Button
              label="Join us, it's Free"
              onPress={() => navigation.navigate("SignUp")}
            ></Button>
            <BorderlessButton
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text variant="button" color="secondary">
                Forgot password?
              </Text>
            </BorderlessButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
