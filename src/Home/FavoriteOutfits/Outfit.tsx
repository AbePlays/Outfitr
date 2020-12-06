import React, { useState } from "react";
import { Dimensions, TouchableWithoutFeedback } from "react-native";

import { Box, RoundedIcon } from "../../components";

const { width: wWidth } = Dimensions.get("window");

interface OutfitProps {
  outfit: {
    id: number;
    color: string;
    aspectRatio: number;
    selected: boolean;
  };
  width: number;
}

const Outfit = ({ outfit, width }: OutfitProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelected((prev) => !prev);
        outfit.selected = !outfit.selected;
      }}
    >
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        padding="m"
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio,
        }}
      >
        {selected && (
          <RoundedIcon
            name="check"
            backgroundColor="primary"
            color="white"
            size={24}
          />
        )}
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default Outfit;
