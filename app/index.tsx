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

  const inlineStyles = {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f0f0f0",
      padding: 20,
    },
    headerInfoContainer: {
      backgroundColor: "black",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom: 20,
      alignItems: "center",
    },
    studentNameText: {
      color: "red",
      fontSize: 25,
      fontWeight: "bold",
    },
    studentIdText: {
      fontWeight: "bold",
      color: "white",
      fontSize: 18,
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
    decorativeCircle: {
      width: 50,
      height: 50,
      backgroundColor: "green",
      borderRadius: 100,
      marginTop: 20,
    },
  };

  return (
    <View style={inlineStyles.container}>
      <View style={inlineStyles.headerInfoContainer}>
        <Text style={inlineStyles.studentNameText}>RISKI RIYANTO</Text>
        <Text style={inlineStyles.studentIdText}>105841115822</Text>
      </View>

      <View style={inlineStyles.gridContainer}>
        {gridItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={inlineStyles.gridItemWrapper}
            onPress={() => onGridItemPress(index)}
            activeOpacity={0.7}
          >
            <Image
              style={[
                inlineStyles.itemImage,
                { transform: [{ scale: item.currentScaleFactor }] },
              ]}
              resizeMode="cover"
              source={{ uri: item.displaySrc }}
              onError={(e) =>
                console.log("Gagal memuat gambar:", e.nativeEvent.error)
              }
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={inlineStyles.decorativeCircle}></View>
    </View>
  );
}
