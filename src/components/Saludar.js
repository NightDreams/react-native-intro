import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

function Saludar({ firstName, lastName }) {
  return (
    <Text>
      Hola {firstName} {lastName}
    </Text>
  );
}

// Saludar.defaultProps = {
//   firstName: "Elon",
//   lastName: "Musk",
// };
Saludar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
export default Saludar;
