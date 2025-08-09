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
            <Pressable style={({ pressed }) => [styles.row, pressed && styles.rowPressed] }>
              <Ionicons name="person-circle-outline" size={28} color="#2c3e50" style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.subText}>NIM: {item.nim}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#95a5a6" />
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
    marginLeft: 64,
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
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
  },
  subText: {
    marginTop: 2,
    fontSize: 12,
    color: "#7f8c8d",
  },
});