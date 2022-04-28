import React from "react";
import { Text } from "react-native";

function Saludar({ firstName, lastName }) {
  // const name = firstName || "enrique";
  // const apellido = lastName || "Galdon";

  return (
    <Text>
      Hola {firstName} {lastName}
    </Text>
  );
}

Saludar.defaultProps = {
  firstName: "Elon",
  lastName: "Musk",
};
export default Saludar;
