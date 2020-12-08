import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet } from "react-native";

import { Box, Header, makeStyles, Text } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { Theme } from "../../components/Theme";
import TopCurve from "./TopCurve";
import Graph, { DataPoint } from "./Graph";
import Transaction from "./Transaction";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));
const footerHeight = Dimensions.get("window").width / 3;
const startDate = new Date("2019-09-01").getTime();
const numberOfMonths = 6;
const aspectRatio = 3;
const data: DataPoint[] = [
  {
    date: new Date("2019-11-01").getTime(),
    value: 139.42,
    color: "primary",
    id: 123458,
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 281.23,
    color: "graph1",
    id: 123459,
  },
  {
    date: new Date("2020-02-01").getTime(),
    value: 198.54,
    color: "graph2",
    id: 123451,
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"OutfitIdeas">) => {
  const styles = useStyles();
  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Transaction History"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "share", onPress: () => true }}
      />
      <Box padding="m" flex={1}>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text variant="header" color="secondary" opacity={0.3}>
              TOTAL SPENT
            </Text>
            <Text variant="title1">$619,19</Text>
          </Box>
          <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
            <Text color="primary">All Time</Text>
          </Box>
        </Box>
        <Graph
          data={data}
          startDate={startDate}
          numberOfMonths={numberOfMonths}
        />
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {data.map((item) => (
            <Transaction key={item.id} item={item} />
          ))}
        </ScrollView>
      </Box>
      <TopCurve footerHeight={footerHeight} />
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        height={footerHeight}
      >
        <Image
          source={require("../../../assets/pattern3.png")}
          style={styles.footer}
        />
      </Box>
    </Box>
  );
};

export default TransactionHistory;
