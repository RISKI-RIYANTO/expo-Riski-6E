import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function StudentProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841115822_.jpg?1751871436",
          }}
          style={styles.photo}
        />

        <View style={styles.detailList}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Nama Lengkap</Text>
            <Text style={styles.detailValue}>RISKI RIYANTO</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>NIM</Text>
            <Text style={styles.detailValue}>105841115822</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Kelas</Text>
            <Text style={styles.detailValue}>6E</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Jurusan</Text>
            <Text style={styles.detailValue}>INFORMATIKA</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Fakultas</Text>
            <Text style={styles.detailValue}>TEKNIK</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: "center",
  },
  card: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  photo: {
    width: 140, // Ukuran gambar diubah
    height: 140,
    borderRadius: 100, // Bentuk gambar diubah menjadi persegi dengan sudut membulat
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#4CAF50", // Warna border diubah
  },
  detailList: {
    width: "100%",
  },
  detailItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  detailLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: "#000",
  },
});
