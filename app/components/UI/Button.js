import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{children} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    borderRadius: 14,
    width: "100%",
    alignItems: "center",
    marginTop: 32,
  },
  title: {
    color: "white",
    margin: 17,
    fontSize: 17,
    fontWeight: "600",
  },
})

export default Button
