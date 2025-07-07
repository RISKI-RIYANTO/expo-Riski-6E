import { Image, Text, View } from "react-native";

export default function ProfileCard() {
  const boxShadow = {
    shadowColor: "#111",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  };

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#f1f1f1",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 30,
    }}>
      {/* Info */}
      <View style={{
        backgroundColor: "#101010",
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 22,
        alignItems: "center",
      }}>
        <Text style={{
          color: "#ff5555",
          fontSize: 22,
          fontWeight: "700",
        }}>RISKI RIYANTO</Text>
        <Text style={{
          color: "#eeeeee",
          fontSize: 16,
        }}>105841115822</Text>
      </View>

      {/* Circle */}
      <View style={{
        width: 50,
        height: 50,
        backgroundColor: "#2e7d32",
        borderRadius: 25,
        marginBottom: 25,
      }} />

      {/* Box with image */}
      <View style={{
        width: 210,
        height: 110,
        backgroundColor: "#3b5998",
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 25,
        ...boxShadow,
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

      {/* Triangle */}
      <View style={{
        width: 0,
        height: 0,
        borderLeftWidth: 55,
        borderRightWidth: 55,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#6a1b9a",
        marginBottom: 25,
      }} />

      {/* Badge */}
      <View style={{
        width: 250,
        height: 60,
        backgroundColor: "#ff9800",
        borderRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        ...boxShadow,
      }}>
        <Text style={{
          color: "#fff",
          fontSize: 18,
          fontWeight: "600",
          marginRight: 8,
        }}>105841115822</Text>
        <Text style={{
          fontSize: 22,
        }}>🔥</Text>
      </View>
    </View>
  );
}
