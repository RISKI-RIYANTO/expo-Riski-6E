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
// (NUM_COLUMNS * 2) * IMAGE_MARGIN accounts for left/right margin of each image within the total width.
// I'm adding an extra factor (e.g., 20) to make the images even smaller.
const IMAGE_SIZE = (width - NUM_COLUMNS * IMAGE_MARGIN * 2 - 30) / NUM_COLUMNS; // Lebar total dikurangi margin kiri/kanan setiap gambar, ditambah extra ruang, lalu dibagi jumlah kolom

// --- Komponen ImageItem (Nested) ---
interface ImageItemProps {
  mainImage: ImageSourcePropType;
  altImage: ImageSourcePropType;
}

const ImageItem: React.FC<ImageItemProps> = ({ mainImage, altImage }) => {
  const [isAlt, setIsAlt] = useState<boolean>(false); // State untuk gambar alternatif/utama
  const [scale, setScale] = useState<number>(1); // State untuk skala pembesaran

  const handlePress = () => {
    // Toggle gambar alternatif/utama
    setIsAlt((prevIsAlt) => !prevIsAlt);

    // Perbarui skala: Jika belum 2.4, perbesar 1.2 kali; jika sudah, tetap 2.4.
    setScale((prevScale) => {
      const newScale = prevScale * 1.2;
      return Math.min(newScale, 2.4); // Memastikan skala tidak melebihi 2.4
    });
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

// Kembali ke 9 pasang gambar untuk grid 3x3
const imageData: ImageDataItem[] = [
  {
    id: "1",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841115822_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105922_.jpg?1751871436",
    },
  },
  {
    id: "2",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105122_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105222_.jpg?1751871436",
    },
  },
  {
    id: "3",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105322_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105422_.jpg?1751871436",
    },
  },
  {
    id: "4",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105522_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105622_.jpg?1751871436",
    },
  },
  {
    id: "5",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105722_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841115722_.jpg?1751871436",
    },
  },
  {
    id: "6",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841115622_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106022_.jpg?1751871436",
    },
  },
  {
    id: "7",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106222_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106122_.jpg?1751871436",
    },
  },
  {
    id: "8",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106322_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106422_.jpg?1751871436",
    },
  },
  {
    id: "9",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106522_.jpg?1751871436",
    },
    alt: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841106622_.jpg?1751871436",
    },
  },
];

// --- Komponen Utama App ---
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Grid 3x3</Text>
      <FlatList<ImageDataItem>
        data={imageData}
        renderItem={({ item }) => (
          <ImageItem mainImage={item.main} altImage={item.alt} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS} // Atur kembali menjadi 3 kolom
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
