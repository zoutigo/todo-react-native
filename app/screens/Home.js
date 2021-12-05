import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import useAsyncStorageCrud from "@hooks/useAsyncStorageCrud"

import Button from "@components/UI/Button"
import ToDoCard from "../components/ToDoCard"
import Title from "../components/UI/Title"

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("TodoCreate")
  }

  const { toDoList, toDoDelete, toDoUpdate } = useAsyncStorageCrud()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>My Todo App </Title>
      {toDoList.map((toDo, index) => {
        const handleDelete = () => {
          toDoDelete(index)
        }
        const handleUpdate = () => {
          const updatedToDo = { ...toDo, checked: !toDo.checked }
          toDoUpdate(index, updatedToDo)
        }

        return (
          <ToDoCard
            key={index}
            {...toDo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )
      })}
      <Button onPress={handlePress}>+ Add a to-do</Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default Home
