import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";

import * as ExpoLinking from "expo-linking";

import { TwitterContext } from "../context/context";

const Home = () => {
  const { deepLink } = useContext(TwitterContext);
  console.log(deepLink);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "yellow",
  },
});
