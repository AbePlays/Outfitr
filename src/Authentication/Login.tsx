import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BorderlessButton } from "react-native-gesture-handler";

import { Button, Container, Text } from "../components";
import { Box } from "../components/Theme";
import Checkbox from "../components/Form/Checkbox";
import TextInput from "../components/Form/TextInput";
import Footer from "./components/Footer";
import { AuthNavigationProps } from "../components/Navigation";
import { CommonActions } from "@react-navigation/native";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const footer = (
    <Footer
      title="Dont't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );
  const password = useRef<typeof TextInput>(null);
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    onSubmit: () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "Home",
            },
          ],
        })
      ),
    validationSchema: LoginSchema,
  });
  return (
    <Container footer={footer} pattern={0}>
      <Text variant="title1" textAlign="center" marginBottom="l">
        Welcome back
      </Text>
      <Text variant="body" textAlign="center" marginBottom="l">
        Use your credentials below and login to your account
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
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <TextInput
          ref={password}
          icon="lock"
          placeholder="Enter your Password"
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          error={errors.password}
          touched={touched.password}
          secureTextEntry
          autoCompleteType="password"
          autoCapitalize="none"
          returnKeyType="go"
          returnKeyLabel="go"
          onSubmitEditing={() => handleSubmit()}
        />
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          marginVertical="s"
        >
          <Checkbox
            label="Remember me"
            checked={values.remember}
            onChange={() => setFieldValue("remember", !values.remember)}
          />
          <BorderlessButton
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text variant="button" color="primary">
              Forgot Password
            </Text>
          </BorderlessButton>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Log into your account"
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
