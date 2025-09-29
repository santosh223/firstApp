import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Modal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is a Modal Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Close Modal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white",
  },
  title: {
    fontSize: 24, marginBottom: 20,
  },
  button: {
    paddingVertical: 12, paddingHorizontal: 20, backgroundColor: "#007AFF", borderRadius: 8,
  },
  buttonText: {
    color: "white", fontWeight: "bold",
  },
});
