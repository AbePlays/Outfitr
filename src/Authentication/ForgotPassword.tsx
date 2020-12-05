import React from "react";
import * as Linking from "expo-linking";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Box, Button, Container, Text } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";
import Footer from "./components/Footer";
import TextInput from "./components/Form/TextInput";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = ({
  navigation,
}: StackNavigationProps<Routes, "ForgotPassword">) => {
  const footer = (
    <Footer
      title="Doesn't work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto: help@support.com")}
    />
  );
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
      },
      onSubmit: () => navigation.navigate("PasswordChanged"),
      validationSchema: ForgotPasswordSchema,
    }
  );
  return (
    <Container {...{ footer }} pattern={2}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot Password
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>

        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Reset Password"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
