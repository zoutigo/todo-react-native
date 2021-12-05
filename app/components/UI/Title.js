import React from "react"
import { View, Text, StyleSheet } from "react-native"

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
  title: { fontWeight: "600", fontSize: 32, marginBottom: 42 },
})

export default Title
