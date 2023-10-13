import React from "react";
import { View, Text } from "react-native";

import styles from "./popularjobcard.style";

interface PopularJobCardProps {
  item: any;
}

const PopularJobCard = (props: PopularJobCardProps) => {
  const { item } = props;

  return (
    <View>
      <Text>PopularJobCard</Text>
    </View>
  );
};

export default PopularJobCard;
