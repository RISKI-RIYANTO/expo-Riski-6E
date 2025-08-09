import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { students } from "../data/students";

export default function StudentsListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.nim}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: "/students/[nim]", params: { nim: item.nim } }}
            asChild
          >
            <Pressable style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}>
              <View style={styles.textContainer}>
                <View style={styles.nameRow}>
                  <Ionicons name="person-outline" size={16} color="#2c3e50" />
                  <Text style={styles.nameText}>{item.name}</Text>
                </View>
                <Text style={styles.subText}>NIM: {item.nim}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#95a5a6" />
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  separator: {
    height: 1,
    backgroundColor: "#ecf0f1",
    marginLeft: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
  },
  rowPressed: {
    backgroundColor: "#f8f9fa",
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
  },
  subText: {
    fontSize: 12,
    color: "#7f8c8d",
  },
});