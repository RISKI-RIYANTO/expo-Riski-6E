import React from "react";
import { StyleSheet, Text, View } from "react-native";

const IdBadge = ({ studentId }) => {
  return (
    <View style={badgeStyles.badgeContainer}>
      <Text style={badgeStyles.badgeText}>{studentId}</Text>
      <Text style={badgeStyles.badgeIcon}>🔥</Text>
    </View>
  );
};

const badgeStyles = StyleSheet.create({
  badgeContainer: {
    width: 270,
    height: 70,
    backgroundColor: "#ffb300",
    borderRadius: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    shadowColor: "#000", // Bayangan langsung di sini
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    marginRight: 12,
  },
  badgeIcon: {
    fontSize: 26,
  },
});

export default IdBadge;
