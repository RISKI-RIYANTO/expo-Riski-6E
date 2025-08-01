import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AppInformationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.appContainer}>
      <Text style={styles.appTitle}>Informasi Aplikasi</Text>

      <Text style={[styles.appPurpose, { textAlign: "center" }]}>
        Aplikasi ini dibuat sebagai bagian dari tugas LAB. Tujuannya adalah
        untuk menampilkan informasi umum mengenai Universitas Muhammadiyah
        Makassar serta data diri pembuat aplikasi.
      </Text>

      <Text style={styles.sectionTitle}>Penjelasan Halaman:</Text>

      <View style={styles.infoBox}>
        <Text style={styles.boxTitle}>Halaman Utama</Text>
        <Text style={styles.boxText}>
          Menyajikan ringkasan tentang Unismuh Makassar, termasuk lokasi,
          deskripsi singkat, dan tampilan gambar kampus.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.boxTitle}>Halaman Info</Text>
        <Text style={styles.boxText}>
          Memberikan penjelasan tentang latar belakang pembuatan aplikasi dan
          fungsi dari setiap halaman yang ada.
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.boxTitle}>Halaman Profil</Text>
        <Text style={styles.boxText}>
          Menampilkan data personal pembuat aplikasi, seperti nama lengkap, NIM,
          kelas, jurusan, fakultas, dan foto profil.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 24,
  },
  appTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#007BFF", // Warna biru yang berbeda
    textAlign: "center",
  },
  appPurpose: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "justify",
    lineHeight: 24,
    backgroundColor: "#E6F3FF", // Latar belakang biru muda
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 10,
    color: "#333",
  },
  infoBox: {
    marginBottom: 15,
    backgroundColor: "#FFFFFF", // Latar belakang putih
    padding: 18,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#007BFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#007BFF",
  },
  boxText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#555",
  },
});
