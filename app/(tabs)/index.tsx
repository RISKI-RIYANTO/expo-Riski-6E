import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function UniversityInfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.pageContent}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Universitas Muhammadiyah Makassar</Text>
      </View>

      <Image
        source={require("../assets/images/unismuh.jpg")}
        style={styles.logoImage}
        resizeMode="contain"
      />

      <View style={styles.infoSection}>
        <Text style={styles.bodyText}>
          Unismuh Makassar adalah salah satu universitas swasta terkemuka di
          wilayah Makassar, Sulawesi Selatan. Institusi ini beroperasi di bawah
          naungan organisasi Persyarikatan Muhammadiyah.
        </Text>

        <Text style={styles.bodyText}>
          Alamat Kampus: Jl. Sultan Alauddin No.259, Gn. Sari, Kec. Rappocini,
          Kota Makassar, Sulawesi Selatan 90222
        </Text>

        <Text style={styles.bodyText}>
          Tersedia beragam fakultas, seperti Fakultas Keguruan dan Ilmu
          Pendidikan, Fakultas Ekonomi dan Bisnis, Fakultas Teknik, Fakultas
          Agama Islam, dan lainnya.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContent: {
    padding: 24,
    alignItems: "center", // Menambahkan properti ini untuk memusatkan semua konten
  },
  headerSection: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#2E8B57",
    textAlign: "center", // Properti ini sudah ada untuk memusatkan teks header
  },
  logoImage: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 20,
    borderColor: "#ccc",
  },
  infoSection: {
    backgroundColor: "#F0FFF0",
    padding: 15,
    borderRadius: 10,
    width: "100%", // Menambahkan properti ini agar teks tidak terdistorsi saat diatur ke tengah
  },
  bodyText: {
    fontSize: 15,
    marginBottom: 12,
    textAlign: "center", // Mengubah perataan teks menjadi ke tengah
    lineHeight: 24,
    color: "#333",
  },
});
