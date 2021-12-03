import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "@components/UI/Input";
import Button from "@components/UI/Button";
import useNewTodoManage from "@hooks/useNewTodoManage";

const TodoCreate = ({ navigation }) => {
  const { fieldsTab, handleSubmit } = useNewTodoManage();

  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {fieldsTab.map(({ value, onChange, placeholder }) => {
        return (
          <Input
            key={placeholder}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        );
      })}

      <Button onPress={handleSubmit}> Add a to-do</Button>
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
