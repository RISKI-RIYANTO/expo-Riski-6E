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
  const allImageData = [
    // 9 gambar utama dan 9 gambar alternatif
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
    // Jika Anda ingin menguji penanganan kasus gambar kurang dari 9,
    // Anda bisa menghapus beberapa objek dari array di atas.
    // Contoh: hapus 3 objek terakhir untuk menguji 6 gambar
  ];

  // Batasan skala
  const MIN_SCALE = 1; // Skala minimum saat gambar tidak diskalakan/alternatif
  const MAX_SCALE = 2; // Skala maksimum yang diminta (2x)
  const SCALE_INCREMENT = 0.2; // Peningkatan skala per klik

  // Batasi jumlah gambar yang akan ditampilkan di grid menjadi 9 (untuk grid 3x3)
  // Ini juga berfungsi sebagai penanganan jika jumlah gambar kurang dari 9
  const displayedImageData = allImageData.slice(0, 9); // Ambil hanya 9 gambar pertama

  const [items, setItems] = useState(
    displayedImageData.map((img, index) => ({
      id: index,
      src: img.main,
      altSrc: img.alt,
      scale: MIN_SCALE, // Setiap gambar dimulai pada skala normal (1x)
      isAlt: false,
    }))
  );

  const { width } = Dimensions.get("window");
  const containerPadding = 16;
  const gridGap = 8;

  const availableWidth = width - 2 * containerPadding;
  const CELL_SIZE = (availableWidth - 2 * gridGap) / 3;

  const handleClick = (index) => {
    setItems((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          // Hanya ubah item yang diklik
          const newIsAlt = !item.isAlt;
          const newSrc = newIsAlt ? item.altSrc : item.main;

          let newScale = item.scale;

          // Logika penskalaan:
          // 1. Jika gambar belum diskalakan (scale === MIN_SCALE) dan beralih ke alt, mulai dari 1.2x.
          // 2. Jika gambar sudah diskalakan dan belum mencapai MAX_SCALE, tingkatkan 0.2x.
          // 3. Jika gambar sudah di MAX_SCALE, kembali ke MIN_SCALE (1x).
          // 4. Jika beralih kembali ke gambar utama (bukan alt), selalu reset ke MIN_SCALE.

          if (newIsAlt) {
            // Jika beralih ke gambar alternatif (diklik dan menjadi alt)
            if (item.scale === MIN_SCALE) {
              newScale = MIN_SCALE + SCALE_INCREMENT; // Mulai dari 1.2x
            } else if (item.scale < MAX_SCALE) {
              newScale = Math.min(item.scale + SCALE_INCREMENT, MAX_SCALE); // Tingkatkan, maks 2x
            } else {
              // item.scale sudah MAX_SCALE
              newScale = MIN_SCALE; // Kembali ke 1x setelah mencapai maks saat beralih ke alt
            }
          } else {
            // Jika beralih kembali ke gambar utama (diklik dan tidak lagi alt)
            newScale = MIN_SCALE; // Selalu reset ke 1x
          }

          return {
            ...item,
            src: newSrc,
            isAlt: newIsAlt,
            scale: newScale,
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
              style={[
                styles.gridItem,
                { width: CELL_SIZE, height: CELL_SIZE, margin: gridGap / 2 },
              ]}
              onPress={() => handleClick(index)}
            >
              <Image
                source={{ uri: item.src }}
                style={[styles.image, { transform: [{ scale: item.scale }] }]}
                onError={(e) =>
                  console.log(
                    "Error loading image:",
                    e.nativeEvent.error,
                    item.src
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
    padding: 16,
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
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: 600,
    alignSelf: "center",
    marginHorizontal: -4,
  },
  gridItem: {
    borderWidth: 2,
    borderColor: "#d1d5db",
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
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
