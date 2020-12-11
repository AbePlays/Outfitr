import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";

import { Box, Header, useTheme, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import CartContainer from "./CartContainer";
import Item from "./Item";

const { width } = Dimensions.get("window");
const aspectRatio = width / 375;
const height = 100 * aspectRatio;
const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 Z";

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
  const theme = useTheme();
  return (
    <CartContainer>
      <Box>
        <Box backgroundColor="primary">
          <Header
            dark
            title="Shopping Cart"
            left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
          />
        </Box>
      </Box>
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 50 * aspectRatio,
          }}
          style={{
            borderBottomLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Item />
          <Item />
          <Item />
          <Item />
        </ScrollView>
        <Box
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: height,
          }}
        >
          <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
            <Path d={d} fill={theme.colors.primary}></Path>
          </Svg>
          <Text variant="title2" textAlign="center" color="background">
            3 Items Added
          </Text>
        </Box>
      </Box>
    </CartContainer>
  );
};

export default Cart;
