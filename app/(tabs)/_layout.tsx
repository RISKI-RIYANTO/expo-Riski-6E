import { MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: "#006600",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Halaman Utama",
          drawerLabel: "Beranda",
          drawerIcon: ({ color }: { color: string }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: "Tentang Aplikasi",
          drawerLabel: "Informasi",
          drawerIcon: ({ color }: { color: string }) => (
            <MaterialIcons name="info" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profil Mahasiswa",
          drawerLabel: "Profil",
          drawerIcon: ({ color }: { color: string }) => (
            <MaterialIcons name="person" size={24} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
