import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Input from "@components/UI/Input"
import Button from "@components/UI/Button"
import useNewTodoManage from "@hooks/useNewTodoManage"
import Title from "../components/UI/Title"

const TodoCreate = ({ navigation }) => {
  const { fieldsTab, handleSubmit } = useNewTodoManage()

  const handlePress = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <Title>Add a new Task</Title>
      {fieldsTab.map(({ value, onChange, placeholder }) => {
        return (
          <Input
            key={placeholder}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )
      })}

      <Button onPress={handleSubmit}> Add a to-do</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f3e9",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default TodoCreate
