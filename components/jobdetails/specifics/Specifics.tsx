import React from "react";
import { View, Text } from "react-native";

import { JobType } from "../../../types/components/shared.types";

import styles from "./specifics.style";

interface SpecificsProps {
  title: string;
  points:
    | JobType["job_highlights"]["Qualifications"]
    | JobType["job_highlights"]["Responsibilities"]
    | JobType["job_highlights"]["Benefits"];
}

const Specifics = (props: SpecificsProps) => {
  const { title, points } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
