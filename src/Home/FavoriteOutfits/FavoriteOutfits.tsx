import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Transitioning,
  Transition,
  TransitioningView,
} from "react-native-reanimated";

import { Box, Header, useTheme } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Footer from "./Footer";
import Outfit from "./Outfit";
import TopCurve from "./TopCurve";

const { width: wWidth } = Dimensions.get("window");
const defaultOutfits = [
  {
    id: 1,
    color: "#bfeaf5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: "#beecc4",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: "#ffe4d9",
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 4,
    color: "#ffdddd",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: "#bfeaf5",
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: "#f3f0ef",
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: "#d5c3bb",
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: "#deefc4",
    aspectRatio: 160 / 145,
    selected: false,
  },
];

const FavoriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  const transition = (
    <Transition.Together>
      <Transition.Out type="fade" />
      <Transition.In type="fade" />
    </Transition.Together>
  );
  const list = useRef<TransitioningView>(null);
  const [outfits, setOutfits] = useState(defaultOutfits);
  const [footerHeight, setFooterHeight] = useState(0);
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Favorite Outfits"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}
        >
          <Transitioning.View ref={list} transition={transition}>
            <Box flexDirection="row">
              <Box marginRight="m">
                {outfits
                  .filter((_, i) => i % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter((_, i) => i % 2 === 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
        <TopCurve footerHeight={footerHeight} />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setFooterHeight(height)}
        >
          <Footer
            label="Add to Favorites"
            onPress={() => {
              list.current?.animateNextTransition();
              setOutfits(outfits.filter((outfit) => !outfit.selected));
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FavoriteOutfits;
