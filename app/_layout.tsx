// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return <Stack />;
// }
import { Stack } from "expo-router";

// Komponen layout utama untuk navigasi aplikasi
export default function AppLayout() {
  return (
    <Stack>
      {/* Menyembunyikan header untuk navigasi tab */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
