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
    width: 270, // Lebih lebar untuk memastikan teks tidak terpotong
    height: 70, // Lebih tinggi untuk memastikan teks tidak terpotong
    backgroundColor: "#ffb300", // Warna sedikit berbeda
    borderRadius: 35, // Disesuaikan dengan tinggi baru
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 20, // Ukuran font sedikit berbeda
    fontWeight: "600",
    marginRight: 12, // Margin sedikit berbeda
  },
  badgeIcon: {
    fontSize: 26, // Ukuran emoji sedikit berbeda
  },
});

export default IdBadge;
