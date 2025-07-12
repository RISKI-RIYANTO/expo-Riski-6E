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
    {
      main: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=400&fit=crop",
    },
  ];

  // Konstanta untuk skala
  const INITIAL_SCALE_ON_ALT = 1.2; // Skala awal saat beralih ke gambar alternatif
  const MAX_SCALE = 2.4; // Skala maksimum
  const SCALE_INCREMENT = 0.2; // Peningkatan skala per klik

  const [items, setItems] = useState(
    imageData.map((img, index) => ({
      id: index,
      src: img.main,
      altSrc: img.alt,
      scale: 1, // Skala awal saat ditampilkan adalah 1x (normal)
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

          if (newIsAlt) {
            // Jika beralih ke gambar alternatif
            // Jika skala saat ini adalah 1 (normal), mulai dari INITIAL_SCALE_ON_ALT (1.2)
            // Jika sudah diskalakan (misal 1.2, 1.4, dst), teruskan peningkatan
            if (item.scale === 1) {
              // Jika dari keadaan normal (1x)
              newScale = INITIAL_SCALE_ON_ALT;
            } else if (item.scale < MAX_SCALE) {
              // Jika sudah diskalakan tapi belum maks
              newScale = Math.min(item.scale + SCALE_INCREMENT, MAX_SCALE);
            } else {
              // Jika sudah di skala maksimum (2.4)
              newScale = INITIAL_SCALE_ON_ALT; // Kembali ke skala awal alternatif (1.2)
            }
          } else {
            // Jika beralih kembali ke gambar utama
            newScale = 1; // Reset skala ke 1 (normal)
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
});
