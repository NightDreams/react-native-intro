import React from "react";
import { Button, TextInput, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button title="Enviar" onPress={() => console.log("Enviado")} />
    </View>
  );
}
