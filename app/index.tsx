import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");
const IMAGE_MARGIN = 8; // Increased margin for more spacing and smaller images
const NUM_COLUMNS = 3; // Keep at 3 columns
// Adjusted IMAGE_SIZE to make images smaller.
// We make the images smaller by increasing the "empty space" subtracted from the total width.
// (NUM_COLUMNS * IMAGE_MARGIN * 2) accounts for the horizontal margins between images and at the screen edges.
// The '- 40' is an additional fixed padding to ensure images are noticeably smaller.
const IMAGE_SIZE = (width - NUM_COLUMNS * IMAGE_MARGIN * 2 - 40) / NUM_COLUMNS;

// --- Komponen ImageItem (Nested) ---
interface ImageItemProps {
  mainImage: ImageSourcePropType;
  altImage: ImageSourcePropType;
}

const ImageItem: React.FC<ImageItemProps> = ({ mainImage, altImage }) => {
  const [isAlt, setIsAlt] = useState<boolean>(false); // State untuk mengaktifkan/menonaktifkan gambar alternatif
  const [scale, setScale] = useState<number>(1); // State untuk skala pembesaran
  const [clickCount, setClickCount] = useState<number>(0); // State baru untuk menghitung jumlah klik

  const handlePress = () => {
    // Hanya lakukan pembesaran jika jumlah klik kurang dari 2
    if (clickCount < 2) {
      setScale((prevScale) => {
        // Klik pertama: scale 1 -> 1.2
        // Klik kedua: scale 1.2 -> 2.4 (1.2 * 1.2 = 1.44, lalu 1.44 * 1.2 = 1.728, ini bukan 2.4)
        // Jadi, kita akan atur skala secara langsung berdasarkan jumlah klik
        if (clickCount === 0) {
          return 1.2; // Klik pertama
        } else {
          // clickCount === 1
          return 2.4; // Klik kedua
        }
      });
      setClickCount((prevCount) => prevCount + 1); // Tambah jumlah klik
    } else {
      // Jika sudah 2 kali klik, kembalikan ke skala awal dan reset hitungan jika perlu,
      // atau biarkan tetap 2.4 jika memang hanya perlu berhenti di situ.
      // Berdasarkan permintaan, kita biarkan tetap 2.4 setelah 2 klik.
      // Jika ingin mereset ke skala 1 setelah 2 klik, uncomment baris di bawah:
      // setScale(1);
      // setClickCount(0);
    }

    // Logika penggantian gambar (alt/main) bisa tetap berjalan terpisah dari logika skala
    setIsAlt((prevIsAlt) => !prevIsAlt);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.imageContainer, { transform: [{ scale }] }]} // Terapkan transformasi skala
    >
      <Image
        source={isAlt ? altImage : mainImage} // Tampilkan gambar alternatif jika isAlt true
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};
// --- Akhir Komponen ImageItem ---

// --- Data Gambar ---
interface ImageDataItem {
  id: string;
  main: ImageSourcePropType;
  alt: ImageSourcePropType;
}

// 9 pasang gambar untuk grid 3x3
const imageData: ImageDataItem[] = [
  {
    id: "1",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
  },
  {
    id: "2",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
  },
  {
    id: "3",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
  },
  {
    id: "4",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
  },
  {
    id: "5",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
  },
  {
    id: "6",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
  },
  {
    id: "7",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/1058411105822_.jpg?1751871436",
    },
  },
  {
    id: "8",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
    alt: { uri: "https://via.placeholder.com/150/FA8072/000000?text=A8" },
  },
  {
    id: "9",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105822_.jpg?1751871436",
    },
  },
];

// --- Komponen Utama App ---
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Grid Gambar React Native</Text>
      <FlatList<ImageDataItem>
        data={imageData}
        renderItem={({ item }) => (
          <ImageItem mainImage={item.main} altImage={item.alt} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS} // Atur menjadi 3 kolom
        contentContainerStyle={styles.gridContainer}
      />
    </SafeAreaView>
  );
};

// --- Stylesheet ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: IMAGE_MARGIN, // Tambahkan padding sesuai margin gambar
  },
  imageContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: IMAGE_MARGIN, // Gunakan margin yang sama
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default App;
