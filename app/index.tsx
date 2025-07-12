import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const imageData = [
    // 9 gambar utama dan 9 gambar alternatif yang dipasangkan
    {
      main: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop", // Gambar Utama 1
      alt: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop", // Alternatif 1
    },
    {
      main: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=400&fit=crop", // Gambar Utama 2
      alt: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop", // Alternatif 2
    },
    {
      main: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop", // Gambar Utama 3
      alt: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=400&fit=crop", // Alternatif 3
    },
    {
      main: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop", // Gambar Utama 4
      alt: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop", // Alternatif 4
    },
    {
      main: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=400&fit=crop", // Gambar Utama 5
      alt: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop", // Alternatif 5
    },
    {
      main: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=400&fit=crop", // Gambar Utama 6
      alt: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=400&fit=crop", // Alternatif 6
    },
    {
      main: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=300&h=400&fit=crop", // Gambar Utama 7
      alt: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=400&fit=crop", // Alternatif 7
    },
    {
      main: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=400&fit=crop", // Gambar Utama 8
      alt: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=300&h=400&fit=crop", // Alternatif 8
    },
    {
      main: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=300&h=400&fit=crop", // Gambar Utama 9
      alt: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=400&fit=crop", // Alternatif 9
    },
  ];

  // Skala yang diminta
  const BASE_SCALE_MAIN = 1.2; // Skala gambar utama
  const SCALE_ALT_IMAGE = BASE_SCALE_MAIN * 2; // Skala gambar alternatif (1.2 * 2 = 2.4)

  // Pastikan hanya 9 gambar yang ditampilkan untuk grid 3x3
  const displayedImageData = imageData.slice(0, 9);

  const [items, setItems] = useState(
    displayedImageData.map((img, index) => ({
      id: index,
      mainSrc: img.main,
      altSrc: img.alt,
      isAlt: false, // Menandakan apakah gambar alternatif sedang ditampilkan
      currentSrc: img.main, // Sumber gambar yang sedang ditampilkan
      currentScale: BASE_SCALE_MAIN, // Skala gambar yang sedang ditampilkan
    }))
  );

  // Perhitungan ukuran sel agar responsif dan membentuk grid 3x3 yang pas
  const { width } = Dimensions.get("window");
  const COLUMNS = 3; // Jumlah kolom
  const GRID_PADDING = 16; // Padding container utama (misal dari p-8 di web)
  const ITEM_MARGIN = 4; // Margin individual untuk setiap item (setengah dari gap)

  // Lebar total yang tersedia untuk grid di dalam padding container
  const availableWidth = width - 2 * GRID_PADDING;
  // Total margin horizontal antar item (untuk 3 kolom, ada 2 ruang antar item)
  const totalItemMargin = (COLUMNS - 1) * (ITEM_MARGIN * 2); // (3-1) * (4*2) = 2 * 8 = 16
  // Ukuran sel = (lebar tersedia - total margin antar item) / jumlah kolom
  const CELL_SIZE = (availableWidth - totalItemMargin) / COLUMNS;

  const handleClick = (index) => {
    setItems((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          // Hanya ubah item yang diklik
          const newIsAlt = !item.isAlt; // Toggle status alternatif

          // Tentukan sumber gambar baru dan skala baru secara instan
          const newSrc = newIsAlt ? item.altSrc : item.mainSrc;
          const newScale = newIsAlt ? SCALE_ALT_IMAGE : BASE_SCALE_MAIN;

          return {
            ...item,
            isAlt: newIsAlt,
            currentSrc: newSrc,
            currentScale: newScale,
          };
        }
        return item; // Item lain tetap tidak berubah
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grid Gambar 3x3</Text>

      {/* Penanganan kasus jika jumlah gambar tidak mencukupi */}
      {displayedImageData.length < 9 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            Jumlah gambar tidak mencukupi untuk mengisi grid 3x3. Tersedia{" "}
            {displayedImageData.length} gambar.
          </Text>
        </View>
      ) : (
        <View style={styles.gridContainer}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              // Gunakan CELL_SIZE yang dihitung secara dinamis untuk ukuran sel
              // Tambahkan margin untuk menciptakan jarak antar sel
              style={[
                styles.gridItem,
                {
                  width: CELL_SIZE,
                  height: CELL_SIZE,
                  marginHorizontal: ITEM_MARGIN, // Margin horizontal
                  marginVertical: ITEM_MARGIN, // Margin vertical
                },
              ]}
              onPress={() => handleClick(index)}
            >
              <Image
                source={{ uri: item.currentSrc }}
                style={[
                  styles.image,
                  { transform: [{ scale: item.currentScale }] }, // Terapkan skala yang sedang aktif
                ]}
                onError={(e) =>
                  console.log(
                    "Error loading image:",
                    e.nativeEvent.error,
                    item.currentSrc
                  )
                }
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, // Sama dengan GRID_PADDING dari komponen
    backgroundColor: "#f3f4f6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 32,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // Gunakan space-between atau flex-start dan margin untuk mengatur jarak
    // Kita akan menggunakan flex-start dan margin di item untuk kontrol penuh
    justifyContent: "flex-start", // Pastikan item berjejer dari kiri
    alignItems: "center",
    alignSelf: "center", // Pusatkan gridContainer di tengah layar jika lebarnya kurang dari layar penuh
    // Set lebar gridContainer secara eksplisit agar pas 3 kolom
    // Total lebar = (jumlah kolom * ukuran sel) + (jumlah gap antar kolom * margin per gap)
    width: Dimensions.get("window").width - 2 * 16, // Lebar layar - (2 * padding container)
    // Ini akan memastikan grid pas di dalam padding
  },
  gridItem: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 4,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  noDataContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  noDataText: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
  },
});
