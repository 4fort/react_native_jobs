import React from "react";
import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  DimensionValue,
  GestureResponderEvent,
} from "react-native";

import styles from "./screenheader.style";

interface ScreenHeaderBtnProps {
  iconUrl: ImageSourcePropType;
  dimension: DimensionValue;
  handlePress?: (event: GestureResponderEvent) => void;
}

const ScreenHeaderBtn = (props: ScreenHeaderBtnProps) => {
  const { iconUrl, dimension, handlePress } = props;

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        // @ts-ignore
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
