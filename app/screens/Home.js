import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("TodoCreate");
  };
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title="Go to creta Page" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
