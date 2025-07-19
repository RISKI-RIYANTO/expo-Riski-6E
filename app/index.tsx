import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

// Pastikan splash screen tidak akan disembunyikan sampai semua font dimuat
SplashScreen.preventAutoHideAsync();

const App = () => {
  // Gunakan state untuk melacak apakah aplikasi dan font sudah siap
  const [fontsAreLoaded, setFontsAreLoaded] = useState(false);

  useEffect(() => {
    async function loadAssetsAsync() {
      try {
        // Blok ini khusus untuk memuat semua font kustom dari folder lokal
        await Font.loadAsync({
          "Roboto-Static": require("./fonts/Roboto-Regular.ttf"),
          "OpenSans-Static": require("./fonts/OpenSans-Bold.ttf"),
          "Lato-Static": require("./fonts/Lato-Italic.ttf"),
          "Poppins-Static": require("./fonts/Poppins-SemiBold.ttf"),
          "Montserrat-Static": require("./fonts/Montserrat-Light.ttf"),
          "Roboto-Variable": require("./fonts/ttf/Roboto-VariableFont_wdth,wght.ttf"),
          "Inter-Variable": require("./fonts/ttf/Inter-VariableFont_opsz,wght.ttf"),
          "OpenSans-Variable": require("./fonts/ttf/OpenSans-VariableFont_wdth,wght.ttf"),
          "NotoSans-Variable": require("./fonts/ttf/NotoSans-VariableFont_wdth,wght.ttf"),
          "Montserrat-Variable": require("./fonts/ttf/Montserrat-VariableFont_wght.ttf"),
        });
      } catch (e) {
        // Catat error jika gagal memuat font, tapi biarkan aplikasi berjalan
        console.warn(e);
      } finally {
        // Setelah proses pemuatan selesai (baik sukses atau gagal), atur state menjadi true
        setFontsAreLoaded(true);
      }
    }

    loadAssetsAsync();
  }, []);

  const hideSplashScreen = useCallback(async () => {
    if (fontsAreLoaded) {
      // Setelah aplikasi siap dan font termuat, sembunyikan splash screen
      await SplashScreen.hideAsync();
    }
  }, [fontsAreLoaded]);

  if (!fontsAreLoaded) {
    // Tampilkan loading spinner selama aplikasi belum siap
    return <ActivityIndicator size="large" color="#005a9c" />;
  }

  // Tentukan nomor stambuk saya dan daftar lengkap nama
  const myStambukNumber = 9;
  const studentList = [
    "Marham Hidayat",
    "Nurul Habibah",
    "Zuliftra",
    "NURHIDAYAH",
    "MUH. RAIHAN RAMADHAN",
    "NUR HIDAYAT",
    "Sitti Nurul Annisa",
    "Hasmaniar",
    "RISKI RIYANTO", // Ini nama Anda, nomor 9
    "Mega Utami I. Mappa",
    "GALBI NADIFAH",
    "Abdul Syaaib Damang",
    "ABD. RAHMAN WAHID",
    "Andi Nurpaida",
    "Muhammad fadil",
    "Erlangga",
    "MUHAMMAD LUTHFI ALFARITSI",
    "ANDI AMALIA PUTRI",
    "FAHRUL RAHMAN",
    "FERI MAULANA",
    "ANDI FIRQATUN NAJIAH TENRI BATARI",
    "Syamsul alam",
    "MUH. ALFIAN",
    "M Erwin Khusnaedy",
  ];

  // ====================================================================
  // Logika unik untuk menyusun daftar 11 nama dengan nama Anda di tengah
  // ====================================================================
  const finalDisplayList = [];
  const myIndexInList = myStambukNumber - 1;

  // 1. Ambil 5 nama sebelum nama saya
  for (let i = 5; i >= 1; i--) {
    const index = (myIndexInList - i + studentList.length) % studentList.length;
    finalDisplayList.push(studentList[index]);
  }

  // 2. Tambahkan nama saya di posisi tengah
  finalDisplayList.push(studentList[myIndexInList]);

  // 3. Ambil 5 nama setelah nama saya
  for (let i = 1; i <= 5; i++) {
    const index = (myIndexInList + i) % studentList.length;
    finalDisplayList.push(studentList[index]);
  }

  const fontStyleList = [
    "Roboto-Static",
    "OpenSans-Static",
    "Lato-Static",
    "Poppins-Static",
    "Montserrat-Static",
    "Roboto-Variable",
    "Inter-Variable",
    "OpenSans-Variable",
    "NotoSans-Variable",
    "Montserrat-Variable",
    "Roboto-Static",
  ];

  return (
    <View style={styles.mainContainer} onLayout={hideSplashScreen}>
      <Text style={styles.pageTitle}>Tugas 4</Text>
      <Text style={styles.subTitle}>Nomor Stambuk Saya: {myStambukNumber}</Text>
      <Text style={styles.infoText}>
        Daftar ini menampilkan 11 nama dengan nama saya di posisi tengah.
      </Text>

      {finalDisplayList.map((name, idx) => (
        <View
          key={idx}
          style={[
            styles.listItem,
            idx === 5 && styles.highlightedItem, // Terapkan gaya khusus di index 5 (posisi tengah)
          ]}
        >
          <Text
            style={[
              styles.listItemText,
              { fontFamily: fontStyleList[idx] },
              idx === 5 && styles.highlightedText, // Terapkan gaya khusus di index 5
            ]}
          >
            {name} - Font: {fontStyleList[idx]}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f2f5",
  },
  pageTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#005a9c",
  },
  subTitle: {
    textAlign: "center",
    marginBottom: 5,
  },
  infoText: {
    textAlign: "center",
    marginBottom: 20,
  },
  listItem: {
    marginBottom: 15,
    padding: 10,
    borderLeftWidth: 5,
    borderLeftColor: "#005a9c",
    backgroundColor: "#f9f9f9",
    borderRadius: 4,
  },
  // Gaya khusus untuk nama di tengah
  highlightedItem: {
    borderLeftColor: "#e67e22", // Ganti warna border
    backgroundColor: "#f39c12", // Ganti warna latar
  },
  listItemText: {
    fontSize: 18,
    color: "#333",
  },
  highlightedText: {
    fontWeight: "bold", // Buat teks lebih tebal
    color: "#fff", // Ubah warna teks
  },
});

export default App;
