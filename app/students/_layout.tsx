import { Stack } from "expo-router";

export default function StudentsStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Daftar Mahasiswa" }} />
      <Stack.Screen name="[nim]" options={{ title: "Detail Mahasiswa" }} />
    </Stack>
  );
}