import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Saludar from "./src/components/Saludo";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Curso React Native </Text>
      <Saludar name="oscar" />
      <Saludar name="Luis" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
