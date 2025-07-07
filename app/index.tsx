import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#e5e5e5",
      alignItems: "center",
      justifyContent: "center",
      padding: 25,
    }}>
      {/* Identitas */}
      <View style={{
        backgroundColor: "#000",
        borderRadius: 8,
        padding: 14,
        marginBottom: 18,
        alignItems: "center",
      }}>
        <Text style={{
          color: "#ff4444",
          fontSize: 24,
          fontWeight: "bold",
        }}>RISKI RIYANTO</Text>
        <Text style={{
          color: "#fff",
          fontSize: 17,
          fontWeight: "600",
        }}>105841115822</Text>
      </View>

      {/* Lingkaran Hijau */}
      <View style={{
        width: 52,
        height: 52,
        backgroundColor: "green",
        borderRadius: 26,
        marginBottom: 20,
      }} />

      {/* Persegi Panjang dengan Gambar */}
      <View style={{
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
      }}>
        <Image
          source={require("./assets/kucing.jpg")}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>

      {/* Segitiga */}
      <View style={{
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
      }} />

      {/* Pil dengan Teks dan Emoji */}
      <View style={{
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
      }}>
        <Text style={{
          color: "#fff",
          fontSize: 19,
          fontWeight: "bold",
          marginRight: 10,
        }}>105841115822</Text>
        <Text style={{
          fontSize: 23,
        }}>⭐</Text>
      </View>
    </View>
  );
}
