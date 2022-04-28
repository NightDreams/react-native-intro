import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Saludar from "./src/Saludar";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Curso React Native </Text>
        <br />
        <Saludar firstName="oscar" lastName="ramires" />
        <Saludar firstName="Luis" lastName="Heines" />
        <Saludar />
      </View>
    </NavigationContainer>
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
