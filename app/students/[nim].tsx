import React, { useMemo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { students } from "../data/students";

export default function StudentDetailScreen() {
  const params = useLocalSearchParams<{ nim: string }>();
  const nim = typeof params.nim === "string" ? params.nim : Array.isArray(params.nim) ? params.nim[0] : "";

  const student = useMemo(() => students.find((s) => s.nim === nim), [nim]);

  if (!student) {
    return (
      <View style={styles.center}>
        <Text style={styles.notFoundTitle}>Data tidak ditemukan</Text>
        <Text style={styles.notFoundText}>Mahasiswa dengan NIM {nim} tidak tersedia.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: student.photoUrl }} style={styles.photo} />
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <Text style={styles.value}>{student.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>NIM</Text>
          <Text style={styles.value}>{student.nim}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  notFoundTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  notFoundText: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  container: {
    padding: 24,
    alignItems: "center",
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 24,
    backgroundColor: "#ecf0f1",
  },
  card: {
    width: "100%",
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  row: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e9ecef",
    paddingBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#34495e",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#2c3e50",
  },
});