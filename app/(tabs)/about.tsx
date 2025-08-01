import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutAppScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Tentang Aplikasi ini</Text>

      <View style={styles.summaryCard}>
        <Text style={styles.summaryText}>
          Aplikasi ini dikembangkan sebagai bagian dari tugas LAB dan bertujuan
          untuk memperkenalkan Universitas Muhammadiyah Makassar serta
          menampilkan data diri pembuat aplikasi.
        </Text>
      </View>

      <Text style={styles.sectionHeading}>Deskripsi Fitur:</Text>

      <View style={styles.featureBox}>
        <Text style={styles.featureTitle}>Halaman Beranda</Text>
        <Text style={styles.featureDesc}>
          Menampilkan informasi dasar tentang Unismuh Makassar, termasuk lokasi,
          deskripsi singkat, dan gambar kampus.
        </Text>
      </View>

      <View style={styles.featureBox}>
        <Text style={styles.featureTitle}>Halaman Informasi</Text>
        <Text style={styles.featureDesc}>
          Memberikan penjelasan tentang latar belakang pembuatan aplikasi dan
          fungsi dari setiap halaman yang tersedia.
        </Text>
      </View>

      <View style={styles.featureBox}>
        <Text style={styles.featureTitle}>Halaman Profil</Text>
        <Text style={styles.featureDesc}>
          Menampilkan data personal pengembang aplikasi, seperti nama, NIM,
          kelas, jurusan, fakultas, dan foto profil.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3498db",
    textAlign: "center",
  },
  summaryCard: {
    backgroundColor: "#eaf4ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 10,
    color: "#2c3e50",
  },
  featureBox: {
    marginBottom: 15,
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#3498db",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#3498db",
  },
  featureDesc: {
    fontSize: 15,
    lineHeight: 22,
    color: "#555",
  },
});
