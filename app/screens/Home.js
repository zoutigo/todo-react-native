import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useAsyncStorageCrud from "@hooks/useAsyncStorageCrud";

import Button from "@components/UI/Button";

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("TodoCreate");
  };

  const { todoList } = useAsyncStorageCrud();
  console.log("todoList:", todoList);
  return (
    <View style={styles.container}>
      {todoList.map(({ title, description }, index) => (
        <View key={index}>
          <Text>{title} </Text>
          <Text>{description ? description : "No description"} </Text>
        </View>
      ))}
      <Button onPress={handlePress}>+ Add a to-do</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
