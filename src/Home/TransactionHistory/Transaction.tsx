import React from "react";
import moment from "moment";

import { Box, Text } from "../../components";
import { DataPoint } from "./Graph";

interface TransactionProps {
  item: DataPoint;
}

const Transaction = ({ item }: TransactionProps) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      marginTop="l"
    >
      <Box>
        <Box flexDirection="row" alignItems="center" marginBottom="s">
          <Box
            backgroundColor={item.color}
            marginRight="s"
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
            }}
          ></Box>
          <Text variant="title3">{`#${item.id}`}</Text>
        </Box>
        <Text color="info">{`$${item.value} - ${moment(item.date).format(
          "DD MMMM, YYYY"
        )}`}</Text>
      </Box>
      <Box>
        <Text color="secondary" variant="button">
          See More
        </Text>
      </Box>
    </Box>
  );
};

export default Transaction;
