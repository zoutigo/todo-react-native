import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "@components/UI/Button";

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("TodoCreate");
  };
  return (
    <View style={styles.container}>
      <Button onPress={handlePress}>+ Add a to-do</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
