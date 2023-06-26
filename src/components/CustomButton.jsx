import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 18,
    width: "46%",
    height: 60,
    borderRadius: 5,
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});


const CustomButton = ({ text, bkColor, onPress }) => {
  return (
    <TouchableOpacity 
      style={{...styles.button, backgroundColor: bkColor}}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;