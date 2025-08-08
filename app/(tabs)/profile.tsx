import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function StudentProfile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        <Image
          source={require("../assets/images/profil.jpg")}
          style={styles.profilePhoto}
        />

        <View style={styles.profileDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Nama Lengkap</Text>
            <Text style={styles.detailValue}>RISKI RIYANTO</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Nomor Induk Mahasiswa</Text>
            <Text style={styles.detailValue}>105841115822</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Kelas</Text>
            <Text style={styles.detailValue}>6E</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Jurusan</Text>
            <Text style={styles.detailValue}>INFORMATIKA</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Fakultas</Text>
            <Text style={styles.detailValue}>TEKNIK</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  profileCard: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderRadius: 15,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#2ecc71",
  },
  profileDetails: {
    width: "100%",
  },
  detailRow: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    paddingBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#495057",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 17,
    color: "#000",
  },
});
