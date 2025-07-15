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
const IMAGE_MARGIN = 8; // Margin antar setiap gambar
const NUM_COLUMNS = 3; // Jumlah kolom dalam grid
// Ukuran gambar dihitung agar lebih kecil dan responsif
const IMAGE_SIZE = (width - NUM_COLUMNS * IMAGE_MARGIN * 2 - 40) / NUM_COLUMNS;

// --- Komponen ImageItem (Nested) ---
interface ImageItemProps {
  mainImage: ImageSourcePropType;
  altImage: ImageSourcePropType;
}

const ImageItem: React.FC<ImageItemProps> = ({ mainImage, altImage }) => {
  const [isAlt, setIsAlt] = useState<boolean>(false); // State untuk gambar alternatif/utama
  const [scale, setScale] = useState<number>(1); // State untuk skala pembesaran
  const [clickCount, setClickCount] = useState<number>(0); // State untuk menghitung jumlah klik pada gambar ini

  const handlePress = () => {
    // Logika skala: hanya berubah pada 2 klik pertama
    if (clickCount === 0) {
      setScale(1.2); // Klik pertama: skala 1.2x
    } else if (clickCount === 1) {
      setScale(2.0); // Klik kedua: skala 2.0x
    }
    // Jika clickCount sudah 2 atau lebih, skala akan tetap 2.0.
    // Ini secara eksplisit memenuhi permintaan "pembatasan penskalaan maksimum 2x setelah klik kedua".

    // Tingkatkan jumlah klik
    setClickCount((prevCount) => prevCount + 1);

    // Logika penggantian gambar (alternatif/utama)
    // Akan selalu berganti setiap kali diklik
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

// 9 pasang gambar untuk grid 3x3, dengan beberapa gambar alternatif yang berbeda secara visual
const imageData: ImageDataItem[] = [
  {
    id: "1",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841115622_.jpg?1751871436",
    },
    alt: {
      uri: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Alt1", // Gambar alternatif berbeda
    },
  },
  {
    id: "2",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841115422_.jpg?1751871436",
    },
    alt: {
      uri: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Alt2", // Gambar alternatif berbeda
    },
  },
  {
    id: "3",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841115222_.jpg?1751871436",
    },
    alt: {
      uri: "https://via.placeholder.com/150/5733FF/FFFFFF?text=Alt3", // Gambar alternatif berbeda
    },
  },
  {
    id: "4",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841115822_.jpg?1751871436",
    },
    alt: {
      uri: "https://via.placeholder.com/150/FFFF33/000000?text=Alt4", // Gambar alternatif berbeda
    },
  },
  {
    id: "5",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105922_.jpg?1751871436",
    },
    alt: {
      uri: "https://via.placeholder.com/150/33FFFF/000000?text=Alt5", // Gambar alternatif berbeda
    },
  },
  {
    id: "6",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105722_.jpg?1751871436",
    },
    alt: {
      uri: "https://via.placeholder.com/150/FF33FF/FFFFFF?text=Alt6", // Gambar alternatif berbeda
    },
  },
  {
    id: "7",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105522_.jpg?1751871436",
    },
    alt: {
      uri: "https://via.placeholder.com/150/33FF33/000000?text=Alt7", // Gambar alternatif berbeda
    },
  },
  {
    id: "8",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105322_.jpg?1751871436",
    },
    alt: {
      uri: "https://via.placeholder.com/150/FFA500/FFFFFF?text=Alt8", // Gambar alternatif berbeda
    },
  },
  {
    id: "9",
    main: {
      uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841105122_.jpg?1751871436",
    },
    alt: {
      uri: "https://via.placeholder.com/150/008080/FFFFFF?text=Alt9", // Gambar alternatif berbeda
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
