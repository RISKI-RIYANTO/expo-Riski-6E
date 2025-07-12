import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const imageData = [
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115822.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115322.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115622.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115022.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115422.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115122.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115922.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115222.jpg?17518714364",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116022.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116922.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116122.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116822.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116222.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116722.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116322.jpg?17518714368",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116622.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116422.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116522.jpg?1751871436",
    },
  ];

  const [gridItems, setGridItems] = useState(
    imageData.map((pair) => ({
      originalSrc: pair.originalSrc,
      alternateSrc: pair.alternateSrc,
      displaySrc: pair.originalSrc,
      isAlternate: false,
      currentScaleFactor: 1,
      hasError: false, // State baru untuk melacak kesalahan pemuatan gambar
    }))
  );

  const onGridItemPress = (itemIndex) => {
    setGridItems((currentGridItems) => {
      const updatedGridItems = [...currentGridItems];
      const selectedItem = { ...updatedGridItems[itemIndex] };

      if (!selectedItem.isAlternate) {
        selectedItem.isAlternate = true;
        selectedItem.displaySrc = selectedItem.alternateSrc;
        selectedItem.currentScaleFactor = 1.2;
      } else {
        if (selectedItem.currentScaleFactor < 2.4) {
          selectedItem.currentScaleFactor = 2.4;
        }
      }

      updatedGridItems[itemIndex] = selectedItem;
      return updatedGridItems;
    });
  };

  // Fungsi untuk menangani kesalahan pemuatan gambar
  const onImageError = (index) => {
    setGridItems((currentGridItems) => {
      const updatedGridItems = [...currentGridItems];
      updatedGridItems[index] = { ...updatedGridItems[index], hasError: true };
      return updatedGridItems;
    });
  };

  const inlineStyles = {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      padding: 20,
    },
    gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100%",
      maxWidth: 480,
    },
    gridItemWrapper: {
      width: "33.33%",
      aspectRatio: 0.75,
      padding: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    itemImage: {
      width: "100%",
      height: "100%",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#ddd",
    },
    errorText: {
      // Gaya untuk teks error
      color: "red",
      textAlign: "center",
      fontSize: 10,
    },
  };

  return (
    <View style={inlineStyles.container}>
      <View style={inlineStyles.gridContainer}>
        {gridItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={inlineStyles.gridItemWrapper}
            onPress={() => onGridItemPress(index)}
            activeOpacity={0.7}
          >
            {item.hasError ? ( // Tampilkan teks error jika ada kesalahan
              <Text style={inlineStyles.errorText}>Gagal memuat gambar</Text>
            ) : (
              <Image
                style={[
                  inlineStyles.itemImage,
                  { transform: [{ scale: item.currentScaleFactor }] },
                ]}
                resizeMode="cover"
                source={{ uri: item.displaySrc }}
                onError={() => onImageError(index)} // Panggil fungsi error handler baru
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
