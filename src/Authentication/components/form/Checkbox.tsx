import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box } from "../../../components/Theme";
import { Text } from "../../../components";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  return (
    <RectButton onPress={() => onChange()} style={{ justifyContent: "center" }}>
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="m"
          borderRadius="s"
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}
          height={20}
          width={20}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;