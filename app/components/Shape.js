import { View } from "react-native";

const Shape = ({ type, size, color, marginB }) => {
  let shapeStyle = {};
  switch (type) {
    case "circle":
      shapeStyle = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
      };
      break;
    case "triangle":
      shapeStyle = {
        width: 0,
        height: 0,
        borderLeftWidth: size / 2,
        borderRightWidth: size / 2,
        borderBottomWidth: size * 0.9,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: color,
      };
      break;
    default:
      shapeStyle = {};
  }

  return <View style={[shapeStyle, { marginBottom: marginB }]} />;
};

export default Shape;
