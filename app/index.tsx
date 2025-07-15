import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";

const bas69GenerateImagePairs = () => {
  const baseNIM = "10584111";
  const suffix = "22";
  const baseURL = "https://simak.unismuh.ac.id/upload/mahasiswa/";
  const query = "_.jpg?1751871539";
  const altURL =
    "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif";

  const pairs = [];

  for (let i = 53; i <= 61; i++) {
    const nim = `${baseNIM}${i}${suffix}`;
    const main = `${baseURL}${nim}${query}`;
    const alt = altURL; // semua alternatif sama
    pairs.push({ main, alt });
  }

  return pairs;
};

const bas69ImagePairs = bas69GenerateImagePairs();

export default function Bas69GambarGrid() {
  const [bas69States, setBas69States] = useState(
    bas69ImagePairs.map(() => ({ scale: 1, isAlt: false }))
  );

  const bas69HandlePress = (index: number) => {
    setBas69States((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const newScale = item.scale < 2 ? item.scale * 1.2 : 2;
        return {
          scale: newScale,
          isAlt: !item.isAlt,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={bas69Styles.grid}>
      {bas69ImagePairs.map((pair, index) => (
        <Pressable key={index} onPress={() => bas69HandlePress(index)}>
          <Image
            source={{ uri: bas69States[index].isAlt ? pair.alt : pair.main }}
            style={[
              bas69Styles.image,
              {
                transform: [{ scale: bas69States[index].scale }],
              },
            ]}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const bas69Styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: Dimensions.get("window").width / 3 - 20,
    height: Dimensions.get("window").width / 3 - 20,
    margin: 5,
    borderRadius: 10,
    resizeMode: "cover",
    backgroundColor: "#ddd",
    borderWidth: 1,
    borderColor: "#aaa",
  },
});
