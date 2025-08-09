import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Text } from 'react-native';
import MahasiswaItem from '@/components/MahasiswaItem';
import mahasiswa, { type Mahasiswa } from '@/data/mahasiswa';

export default function MahasiswaListScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Daftar Mahasiswa</Text>
      </View>
      <FlatList<Mahasiswa>
        data={mahasiswa}
        keyExtractor={(item) => String(item.nim)}
        renderItem={({ item }) => (
          <MahasiswaItem nama={item.nama} nim={item.nim} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f7f7f7' },
  headerContainer: { paddingHorizontal: 16, paddingVertical: 12 },
  headerTitle: { fontSize: 20, fontWeight: '600' },
  listContent: { backgroundColor: '#fff' },
});