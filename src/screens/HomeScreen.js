import { Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function HomeScreen(props) {
  // console.log("🚀 ~ file: HomeScreen.js ~ line 5 ~ HomeScreen ~ props", props);
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToSettings} title="Ir a Ajustes" />
    </SafeAreaView>
  );
}
