import React from 'react';
import { View, StyleSheet } from 'react-native';

// Impor komponen-komponen mandiri
import IdBadge from './components/IdBadge';
import ImageContainer from './components/ImageContainer';
import InfoSection from './components/InfoSection';

// Impor komponen Shape yang sudah diperbarui
import Shape from './components/Shape';

export default function MainProfileScreen() {
  const studentName = "RISKI RIYANTO";
  const studentId = "105841115822";

  return (
    <View style={appStyles.mainLayout}>
      <View style={appStyles.componentWrapper}> {/* Wrapper untuk margin bawah */}
        <InfoSection name={studentName} id={studentId} />
      </View>

      <View style={appStyles.componentWrapper}>
        <Shape type="circle" shapeColor="#4caf50" shapeSize={60} />
      </View>

      <View style={appStyles.componentWrapper}>
        <ImageContainer imageSource={require("./assets/kucing.jpg")} />
      </View>

      <View style={appStyles.componentWrapper}>
        <Shape type="triangle" shapeColor="#8e24aa" shapeSize={120} /> {/* Segitiga */}
      </View>

      <View> {/* Tidak ada marginBottom setelah badge terakhir */}
        <IdBadge studentId={studentId} />
      </View>
    </View>
  );
}

const appStyles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  componentWrapper: {
    marginBottom: 30, // Memberikan jarak antar komponen
  },
});
