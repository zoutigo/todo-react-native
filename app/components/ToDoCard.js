import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

const ToDoCard = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
      <View>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.description}>{description} </Text>
      </View>
    </View>
  )
}

export default ToDoCard

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(60,60,67,0.6)",
    width: "100%",
    paddingBottom: 16,
    marginBottom: 16,
  },
  checkBox: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "rgba(60,60,67,0.6)",
    borderRadius: 4,
  },
  title: {
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    color: "rgba(60,60,67,0.6)",
  },
})
