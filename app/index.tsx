// import React from "react";
// import { FlatList, StyleSheet, Text, View } from "react-native";
// import Ionicons from "react-native-vector-icons/Ionicons"; // Hanya perlu satu import untuk Ionicons

// // Data untuk 10 ikon yang akan ditampilkan
// const iconData = [
//   { id: "1", name: "home", label: "Beranda" },
//   { id: "2", name: "settings", label: "Pengaturan" },
//   { id: "3", name: "person", label: "Profil" },
//   { id: "4", name: "notifications", label: "Notifikasi" },
//   { id: "5", name: "chatbubbles", label: "Pesan" },
//   { id: "6", name: "camera", label: "Kamera" },
//   { id: "7", name: "heart", label: "Favorit" },
//   { id: "8", name: "cart", label: "Keranjang" },
//   { id: "9", name: "calendar", label: "Kalender" },
//   { id: "10", name: "location", label: "Lokasi" },
// ];

// const IconScreen: React.FC = () => {
//   // Fungsi untuk merender setiap item ikon di FlatList
//   const renderIconItem = ({ item }: { item: (typeof iconData)[0] }) => (
//     <View style={styles.iconItem}>
//       <Ionicons name={item.name} size={60} color="#6200EE" />{" "}
//       {/* Warna ungu khas */}
//       <Text style={styles.iconLabel}>{item.label}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Ikon Keren</Text>
//       </View>

//       <FlatList
//         data={iconData}
//         renderItem={renderIconItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2} // Menampilkan 2 kolom ikon
//         contentContainerStyle={styles.flatListContent}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5", // Latar belakang abu-abu muda
//   },
//   header: {
//     backgroundColor: "#6200EE", // Warna ungu yang cerah
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 4, // Shadow untuk Android
//     shadowColor: "#000", // Shadow untuk iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   headerText: {
//     color: "#FFFFFF",
//     fontSize: 26,
//     fontWeight: "bold",
//   },
//   flatListContent: {
//     padding: 15,
//   },
//   iconItem: {
//     flex: 1, // Agar setiap item mengambil ruang yang sama
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#FFFFFF",
//     borderRadius: 12, // Sudut membulat
//     margin: 8, // Jarak antar ikon
//     paddingVertical: 20,
//     aspectRatio: 1, // Menjaga rasio aspek kotak
//     elevation: 2, // Shadow ringan
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.18,
//     shadowRadius: 1.0,
//   },
//   iconLabel: {
//     marginTop: 10,
//     fontSize: 16,
//     color: "#333333",
//     fontWeight: "500",
//   },
// });

// export default IconScreen;
