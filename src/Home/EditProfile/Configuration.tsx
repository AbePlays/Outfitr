import React from "react";
import { ScrollView } from "react-native";

import { Box, Text } from "../../components";
import CheckboxGroup from "./CheckboxGroup";
import RoundedCheckboxGroup from "./RoundedCheckboxGroup";

const outfitType = [
  {
    value: "men",
    label: "For me",
  },
  {
    value: "women",
    label: "For women",
  },
  {
    value: "both",
    label: "For both",
  },
];

const sizes = [
  {
    value: "s",
  },
  {
    value: "m",
  },
  {
    value: "l",
  },
  {
    value: "xl",
  },
  {
    value: "xxl",
  },
];

const colors = [
  {
    value: "#0c0d34",
  },
  {
    value: "#ff0058",
  },
  {
    value: "#50b9de",
  },
  {
    value: "#00d99a",
  },
  {
    value: "#f35e33",
  },
];

const prefferedBrands = [
  {
    value: "adidas",
    label: "Adidas",
  },
  {
    value: "nike",
    label: "Nike",
  },
  {
    value: "converse",
    label: "Converse",
  },
  {
    value: "tommy-hilfiger",
    label: "Tommy Hilfiger",
  },
  {
    value: "jordan",
    label: "Jordan",
  },
  {
    value: "le-coq-sportif",
    label: "Le Coq Sportif",
  },
  {
    value: "billionaire-boys-club",
    label: "Billionaire Boys Club",
  },
];

const Configuration = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body">What type of outfit you usually wear?</Text>
        <CheckboxGroup options={outfitType} radio />
        <Text variant="body">What is your clothing size?</Text>
        <RoundedCheckboxGroup options={sizes} />
        <Text variant="body">My preferred clothing colors</Text>
        <RoundedCheckboxGroup options={colors} valueIsColor />
        <Text variant="body">My preferred brands</Text>
        <CheckboxGroup options={prefferedBrands} />
      </Box>
    </ScrollView>
  );
};

export default Configuration;
