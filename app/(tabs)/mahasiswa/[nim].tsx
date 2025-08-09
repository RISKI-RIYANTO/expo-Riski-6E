import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import mahasiswa from '@/data/mahasiswa';

export default function MahasiswaDetailScreen() {
  const { nim } = useLocalSearchParams<{ nim: string }>();
  const data = mahasiswa.find((mhs) => String(mhs.nim) === String(nim));

  if (!data) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Stack.Screen options={{ title: 'Detail Mahasiswa' }} />
        <View style={styles.container}>
          <Text>Mahasiswa tidak ditemukan.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ title: data.nama }} />
      <View style={styles.container}>
        <Image source={{ uri: data.foto }} style={styles.image} />
        <Text style={styles.name}>{data.nama}</Text>
        <Text style={styles.nim}>NIM: {data.nim}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  image: { width: 160, height: 160, borderRadius: 80, marginBottom: 16 },
  name: { fontSize: 22, fontWeight: '700', marginBottom: 6 },
  nim: { fontSize: 16, color: '#555' },
});