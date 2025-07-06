import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Bagian yang sudah ada: Nama dan NIM */}
      <View
        style={{
          backgroundColor: "black",
          borderRadius: 10,
          padding: 15, // Menambahkan padding agar teks tidak terlalu mepet
          marginBottom: 20, // Menambahkan margin bawah
          alignItems: "center", // Memastikan teks di tengah horizontal
        }}
      >
        <Text
          style={{
            color: "red",
            fontSize: 25,
            fontWeight: "bold", // Menambahkan bold agar lebih jelas
          }}
        >
          RISKI RIYANTO
        </Text>

        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 18, // Menyesuaikan ukuran font
          }}
        >
          105841115822
        </Text>
      </View>

      {/* Lingkaran hijau yang sudah ada */}
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "green",
          borderRadius: 100,
          marginBottom: 20, // Menambahkan margin bawah
        }}
      ></View>

      {/* Tugas 1: Tambahkan Persegi Panjang dengan Gambar */}
      <View style={styles.rectangle}>
        <Image
          source={require("./assets/kucing.jpg")}
          // Placeholder gambar
          style={styles.rectangleImage}
          accessibilityLabel="Gambar placeholder di dalam persegi panjang"
        />
      </View>

      {/* Tugas 2: Tambahkan Segitiga */}
      <View style={styles.triangle}></View>

      {/* Tugas 3: Tambahkan Pil (Tabung) dengan Teks dan Icon */}
      <View style={styles.pill}>
        <Text style={styles.pillText}>105841115822</Text>{" "}
        {/* Menggunakan NIM sebagai "stambuk" */}
        <Text style={styles.pillIcon}>⭐</Text>{" "}
        {/* Menggunakan emoji sebagai ikon */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Menambahkan warna latar belakang untuk visibilitas
    padding: 20, // Menambahkan padding keseluruhan
  },
  // Style untuk Persegi Panjang
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // Penting untuk memastikan gambar tidak keluar dari batas
    marginBottom: 20, // Menambahkan margin bawah
    elevation: 5, // Menambahkan sedikit bayangan untuk efek 3D (Android)
    shadowColor: "#000", // Bayangan untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  rectangleImage: {
    width: "100%", // Gambar mengisi seluruh lebar persegi panjang
    height: "100%", // Gambar mengisi seluruh tinggi persegi panjang
    resizeMode: "cover", // Memastikan gambar mengisi area tanpa distorsi
    borderRadius: 10, // Mengikuti border radius parent
  },
  // Style untuk Segitiga
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 60, // Lebar dasar segitiga
    borderRightWidth: 60, // Lebar dasar segitiga
    borderBottomWidth: 120, // Tinggi segitiga
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "purple", // Warna segitiga
    marginBottom: 20, // Menambahkan margin bawah
  },
  // Style untuk Pil (Tabung)
  pill: {
    width: 280, // Lebar pil
    height: 60, // Tinggi pil
    backgroundColor: "orange",
    borderRadius: 30, // Setengah dari tinggi untuk membuatnya berbentuk pil
    flexDirection: "row", // Mengatur konten secara horizontal
    justifyContent: "center", // Memusatkan konten secara horizontal
    alignItems: "center", // Memusatkan konten secara vertikal
    paddingHorizontal: 20, // Padding horizontal di dalam pil
    elevation: 5, // Menambahkan sedikit bayangan untuk efek 3D (Android)
    shadowColor: "#000", // Bayangan untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  pillText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10, // Spasi antara teks dan ikon
  },
  pillIcon: {
    fontSize: 24, // Ukuran ikon
  },
});
