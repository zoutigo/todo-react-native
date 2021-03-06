import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      value={value}
      onChangeText={(e) => onChange(e)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 19,
    paddingBottom: 19,
    fontSize: 17,
    borderBottomColor: "rgba(60,60,67,0.3)",
    borderBottomWidth: 1,
    marginBottom: 24,
  },
});

export default Input;
