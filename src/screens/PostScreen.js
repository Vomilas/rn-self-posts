import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainScreen } from "./MainScreen";

export const PostScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text> Post Screen</Text>
    </View>
  );
};

PostScreen.navigationOptions = {
  headerTitle: "Post # 42"
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
