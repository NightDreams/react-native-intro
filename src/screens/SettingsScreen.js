import { Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToSettings = (pageName) => {
    navigation.navigate(pageName);
  };
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToSettings("Home")} title="Ir a Home" />
    </SafeAreaView>
  );
}
