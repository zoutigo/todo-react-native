import React from "react"
import { View, Text, StyleSheet } from "react-native"
import useAsyncStorageCrud from "@hooks/useAsyncStorageCrud"

import Button from "@components/UI/Button"
import ToDoCard from "../components/ToDoCard"

const Home = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("TodoCreate")
  }

  const { toDoList, toDoDelete } = useAsyncStorageCrud()

  return (
    <View style={styles.container}>
      {toDoList.map((toDo, index) => {
        const handleDelete = () => {
          toDoDelete(index)
        }

        return <ToDoCard key={index} {...toDo} handleDelete={handleDelete} />
      })}
      <Button onPress={handlePress}>+ Add a to-do</Button>
    </View>
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
