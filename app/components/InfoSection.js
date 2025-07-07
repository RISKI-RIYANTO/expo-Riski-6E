import React from "react";
import { StyleSheet, Text, View } from "react-native";

const InfoSection = ({ name, id }) => {
  return (
    <View style={infoStyles.cardWrapper}>
      <Text style={infoStyles.nameDisplay}>{name}</Text>
      <Text style={infoStyles.idDisplay}>{id}</Text>
    </View>
  );
};

const infoStyles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: "#1a1a1a",
    borderRadius: 15,
    paddingVertical: 18,
    paddingHorizontal: 28,
    alignItems: "center",
    shadowColor: "#000", // Bayangan langsung di sini
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  nameDisplay: {
    color: "#ff4d4d",
    fontSize: 25,
    fontWeight: "bold",
  },
  idDisplay: {
    color: "#e5e5e5",
    fontSize: 18,
    marginTop: 2,
  },
});

export default InfoSection;
