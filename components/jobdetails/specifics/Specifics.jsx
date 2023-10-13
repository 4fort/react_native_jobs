import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

interface SpecificsProps {
  title: string;
  points: JobType;
}

const Specifics = () => {
  return (
    <View>
      <Text>Specifics</Text>
    </View>
  );
};

export default Specifics;
