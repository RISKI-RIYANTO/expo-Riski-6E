import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Identitas */}
      <View style={styles.identityBox}>
        <Text style={styles.name}>RISKI RIYANTO</Text>
        <Text style={styles.nim}>105841115822</Text>
      </View>

      {/* Lingkaran Hijau */}
      <View style={styles.circle} />

      {/* Persegi Panjang dengan Gambar */}
      <View style={styles.imageBox}>
        <Image
          source={require("./assets/kucing.jpg")}
          style={styles.image}
        />
      </View>

      {/* Segitiga */}
      <View style={styles.triangle} />

      {/* Pil dengan Teks dan Emoji */}
      <View style={styles.pill}>
        <Text style={styles.pillText}>105841115822</Text>
        <Text style={styles.pillIcon}>⭐</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  identityBox: {
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 14,
    marginBottom: 18,
    alignItems: "center",
  },
  name: {
    color: "#ff4444",
    fontSize: 24,
    fontWeight: "bold",
  },
  nim: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  circle: {
    width: 52,
    height: 52,
    backgroundColor: "green",
    borderRadius: 26,
    marginBottom: 20,
  },
  imageBox: {
    width: 200,
    height: 100,
    backgroundColor: "#3366cc",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: "solid",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "purple",
    marginBottom: 20,
  },
  pill: {
    width: 260,
    height: 58,
    backgroundColor: "orange",
    borderRadius: 29,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
  pillText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    marginRight: 10,
  },
  pillIcon: {
    fontSize: 23,
  },
});
