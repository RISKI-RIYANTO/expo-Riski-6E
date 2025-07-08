import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.mainWrapper}>
      {/* Kotak untuk Nama */}
      <View style={styles.nameBox}>
        <Text style={styles.fullName}>RISKI RIYANTO</Text>
      </View>

      {/* Bentuk Segitiga */}
      <View style={styles.triangleWrapper}>
        <View style={styles.triangleShape} />
      </View>

      {/* Kapsul untuk Stambuk */}
      <View style={styles.capsuleShape}>
        <Text style={styles.studentId}>105841115822</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 60,
  },

  // Styling untuk kotak nama
  nameBox: {
    width: 280,
    height: 90,
    backgroundColor: "#1976D2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginBottom: 45,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    elevation: 6,
  },

  fullName: {
    fontSize: 22,
    fontWeight: "600",
    color: "#FAFAFA",
    textAlign: "center",
    letterSpacing: 1,
  },

  // Wrapper untuk segitiga
  triangleWrapper: {
    marginBottom: 45,
  },

  triangleShape: {
    width: 0,
    height: 0,
    borderLeftWidth: 55,
    borderRightWidth: 55,
    borderBottomWidth: 85,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#F57C00",
  },

  // Styling untuk kapsul stambuk
  capsuleShape: {
    backgroundColor: "#388E3C",
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    elevation: 6,
  },

  studentId: {
    color: "#FAFAFA",
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
