import React from "react";
import { Image, StyleSheet, View } from "react-native"; // Tambah View

const ImageContainer = ({ imageSource }) => {
  return (
    <View style={imageStyles.wrapper}>
      {" "}
      {/* Pembungkus untuk bayangan */}
      <Image
        source={imageSource}
        style={imageStyles.media}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel="Gambar profil unik"
      />
    </View>
  );
};

const imageStyles = StyleSheet.create({
  wrapper: {
    width: 230,
    height: 125,
    borderRadius: 18,
    overflow: "hidden",
    shadowColor: "#000", // Bayangan langsung di sini
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 8,
  },
  media: {
    width: "100%",
    height: "100%",
  },
});

export default ImageContainer;
