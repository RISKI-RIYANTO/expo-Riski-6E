import React from "react";
import { View } from "react-native";

const Shape = ({ type, shapeColor, shapeSize, extraStyles = {} }) => {
  let specificShapeStyle = {};

  // Default shadow for all shapes unless explicitly overridden
  const defaultShadow = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  };

  switch (type) {
    case "circle":
      specificShapeStyle = {
        width: shapeSize || 60,
        height: shapeSize || 60,
        borderRadius: (shapeSize || 60) / 2,
        backgroundColor: shapeColor || "#4caf50",
      };
      break;
    case "triangle":
      const baseWidth = shapeSize || 120; // Lebar dasar segitiga
      const height = shapeSize ? shapeSize * 0.9 : 110; // Tinggi segitiga
      specificShapeStyle = {
        width: 0,
        height: 0,
        borderLeftWidth: baseWidth / 2,
        borderRightWidth: baseWidth / 2,
        borderBottomWidth: height, // Segitiga menunjuk ke atas
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: shapeColor || "#8e24aa", // Warna segitiga
      };
      // Segitiga tidak memiliki bayangan tradisional seperti View biasa
      // Jadi kita tidak menerapkan defaultShadow di sini
      break;
    case "rectangle":
      specificShapeStyle = {
        width: shapeSize?.width || 230,
        height: shapeSize?.height || 125,
        borderRadius: shapeSize?.borderRadius || 18,
        backgroundColor: shapeColor || "transparent",
      };
      break;
    case "pli": // Bentuk badge ID
      specificShapeStyle = {
        width: 270,
        height: 70,
        borderRadius: 35,
        backgroundColor: shapeColor || "#ffb300",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
      };
      break;
    default:
      specificShapeStyle = {};
  }

  // Terapkan bayangan hanya jika bukan segitiga atau jika disetel di extraStyles
  const finalStyles = [
    specificShapeStyle,
    type !== "triangle" && defaultShadow, // Hindari bayangan untuk segitiga
    extraStyles, // Gaya tambahan dari luar
  ];

  return <View style={finalStyles} />;
};

export default Shape;
