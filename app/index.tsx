import { Image, Text, View } from "react-native";

export default function TampilanAkhir() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#f6f6f6",
      justifyContent: "center",
      alignItems: "center",
      padding: 30,
    }}>
      
      {/* Nama + NIM */}
      <View style={{
        backgroundColor: "#000",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20,
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#ff5252",
        }}>RISKI RIYANTO</Text>
        <Text style={{
          color: "#fff",
          fontSize: 16,
        }}>105841115822</Text>
      </View>

      {/* Lingkaran Hijau */}
      <View style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "green",
        marginBottom: 20,
      }} />

      {/* Gambar Kucing */}
      <Image
        source={require("./assets/kucing.jpg")}
        style={{
          width: 200,
          height: 100,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />

      {/* Segitiga Ungu */}
      <View style={{
        width: 0,
        height: 0,
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 80,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "purple",
        marginBottom: 20,
      }} />

      {/* Pill Orange */}
      <View style={{
        backgroundColor: "#ffa726",
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 999,
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "#fff",
          marginRight: 8,
        }}>105841115822</Text>
        <Text style={{ fontSize: 20 }}>🔥</Text>
      </View>
    </View>
  );
}
