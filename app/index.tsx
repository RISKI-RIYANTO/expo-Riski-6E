import React from 'react';
import { View, StyleSheet } from 'react-native';

// Impor komponen-komponen baru
import InfoSection from './components/InfoSection';
import Shape from './components/Shape';
import ImageContainer from './components/ImageContainer';
import IdBadge from './components/IdBadge';

export default function MainProfileScreen() { // Mengganti nama fungsi komponen utama
  const studentName = "RISKI RIYANTO";
  const studentId = "105841115822";

  return (
    <View style={appStyles.mainLayout}>
      <InfoSection name={studentName} id={studentId} />

      <Shape type="circle" size={60} color="#4caf50" marginB={30} /> {/* Lingkaran */}

      <ImageContainer imageSource={require("./assets/kucing.jpg")} /> {/* Kotak Gambar */}

      <Shape type="triangle" size={120} color="#8e24aa" marginB={30} /> {/* Segitiga */}

      <IdBadge studentId={studentId} /> {/* Badge ID Siswa (yang tadinya "pli") */}
    </View>
  );
}

const appStyles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Warna latar belakang sedikit berbeda
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});
