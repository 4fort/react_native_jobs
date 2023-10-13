import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes: string[] = [
  "Full Time",
  "Part Time",
  "Internship",
  "Remote",
  "Freelance",
  "Contract",
];

interface WelcomeProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<
    React.SetStateAction<
      string | NativeSyntheticEvent<TextInputChangeEventData>
    >
  >;
  handleClick: () => void;
}

const Welcome = (props: WelcomeProps) => {
  const { searchTerm, setSearchTerm, handleClick } = props;

  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState<string>("Full Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Fort</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(
              text: string | NativeSyntheticEvent<TextInputChangeEventData>
            ) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{
            columnGap: SIZES.small,
            marginBottom: SIZES.small,
          }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
