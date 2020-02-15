import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const MainScreen = ({ navigation }) => {
  const goToPost = () => {
    navigation.navigate("Post");
  };
  return (
    <View style={styles.center}>
      <Text> Main Screen</Text>
      <Button onPress={goToPost} title="Go to Post" />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "My blog"
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
