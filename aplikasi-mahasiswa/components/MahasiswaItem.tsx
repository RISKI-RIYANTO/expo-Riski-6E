import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  nama: string;
  nim: string;
};

export default function MahasiswaItem({ nama, nim }: Props) {
  return (
    <Link href={`/mahasiswa/${nim}`} style={styles.link}>
      <View style={styles.container}>
        <Ionicons name="person-circle-outline" size={24} color="#333" />
        <Text style={styles.text}>{nama}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: { textDecorationLine: 'none' },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  text: { marginLeft: 12, fontSize: 16, color: '#111' },
});