import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';

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

  const [items, setItems] = useState(
    imageData.map((img, index) => ({
      id: index,
      src: img.main,
      altSrc: img.alt,
      scale: 1, // Skala awal
      isAlt: false,
    }))
  );

  // Dapatkan lebar layar
  const { width } = Dimensions.get('window');
  // Margin dan gap (sesuaikan dengan desain Anda, ini contoh konversi dari Tailwind)
  const containerPadding = 16; // p-8 di Tailwind sekitar 16px padding
  const gridGap = 8; // gap-4 di Tailwind sekitar 8px gap antar item

  // Hitung ukuran sel agar semua sel berukuran sama dan membentuk grid 3x3
  // Lebar total yang tersedia untuk grid adalah lebar layar dikurangi padding kiri dan kanan
  const availableWidth = width - (2 * containerPadding);
  // Untuk 3 kolom, ada 2 celah (gap) di antara kolom-kolom tersebut
  const CELL_SIZE = (availableWidth - (2 * gridGap)) / 3;

  const handleClick = (index) => {
    setItems((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          // Logika untuk mengganti gambar ke versi alternatif saat diklik
          const newIsAlt = !item.isAlt;
          const newSrc = newIsAlt ? item.altSrc : item.main; // Jika isAlt baru adalah true, gunakan altSrc, jika tidak, gunakan main

          // Implementasi penskalaan gambar individual
          let newScale = item.scale;
          if (newIsAlt) { // Jika beralih ke gambar alternatif (yaitu, diklik dan sekarang isAlt)
            newScale = Math.min(item.scale * 1.2, 2); // Skala 1.2x, maksimum 2x
          } else { // Jika beralih kembali ke gambar utama
            newScale = 1; // Reset skala ke 1
          }

          return {
            ...item,
            src: newSrc,
            isAlt: newIsAlt,
            scale: newScale,
          };
        }
        return item;
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grid Gambar 3x3</Text>

      {/* Implementasi grid 3x3 */}
      <View style={styles.gridContainer}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.gridItem, { width: CELL_SIZE, height: CELL_SIZE, margin: gridGap / 2 }]} // Memberikan margin setengah gap untuk grid
            onPress={() => handleClick(index)}
          >
            <Image
              source={{ uri: item.src }}
              style={[styles.image, { transform: [{ scale: item.scale }] }]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Mengambil seluruh tinggi layar
    padding: 16, // Padding 16px di semua sisi (setara dengan p-8 di Tailwind)
    backgroundColor: '#f3f4f6', // Warna latar belakang abu-abu terang (setara dengan bg-gray-100)
  },
  title: {
    fontSize: 24, // Ukuran font 24px (setara dengan text-2xl)
    fontWeight: 'bold', // Teks tebal
    textAlign: 'center', // Teks di tengah
    marginBottom: 32, // Margin bawah 32px (setara dengan mb-8)
  },
  gridContainer: {
    flexDirection: 'row', // Tata letak baris
    flexWrap: 'wrap', // Mengizinkan item untuk pindah ke baris baru
    justifyContent: 'flex-start', // Memulai item dari kiri (akan diatur oleh margin di item)
    alignItems: 'center', // Pusatkan item secara vertikal dalam baris
    // Max width untuk grid, disesuaikan agar tidak terlalu lebar di layar besar
    maxWidth: 600, // Sekitar max-w-2xl
    alignSelf: 'center', // Pusatkan grid container di tengah layar
    // Menggunakan margin negatif untuk mengimbangi margin di gridItem agar gap lebih seragam
    marginHorizontal: -4, // Setengah dari gridGap jika gridGap adalah 8
  },
  gridItem: {
    // Ukuran width dan height diatur secara dinamis di komponen utama
    borderWidth: 2, // Border 2px
    borderColor: '#d1d5db', // Warna border abu-abu (setara dengan border-gray-300)
    borderRadius: 8, // Border radius 8px (setara dengan rounded-lg)
    overflow: 'hidden', // Menyembunyikan konten yang meluap
    justifyContent: 'center', // Pusatkan gambar secara vertikal
    alignItems: 'center', // Pusatkan gambar secara horizontal
  },
  image: {
    width: '100%', // Lebar gambar 100% dari parent
    height: '100%', // Tinggi gambar 100% dari parent
    resizeMode: 'cover', // Mode resize 'cover' (setara dengan object-cover)
  },
});
