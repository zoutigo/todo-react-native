import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "@components/UI/Input";
import Button from "@components/UI/Button";

const TodoCreate = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Input placeholder="Name of the task to do" />
      <Input placeholder="Description (optional)" />
      <Button onPress={handlePress}> Add a to-do</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.05)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TodoCreate;
