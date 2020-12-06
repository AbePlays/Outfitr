import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Box, Text } from "../../components";

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

interface CatgoryProps {
  category: {
    color: string;
    title: string;
    id: string;
  };
}

const Catgory = ({ category }: CatgoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessButton onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" alignItems="center" marginTop="s">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: category.color,
                borderWidth: 1,
              }}
            />
          )}
          <View
            style={{
              width: INNER_RADIUS * 2,
              height: INNER_RADIUS * 2,
              borderRadius: INNER_RADIUS,
              backgroundColor: category.color,
            }}
          ></View>
        </Box>
        <Text textAlign="center" marginTop="s">
          {category.title}
        </Text>
      </Box>
    </BorderlessButton>
  );
};

export default Catgory;
