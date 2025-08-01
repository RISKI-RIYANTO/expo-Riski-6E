import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function UnismuhInfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.cardHeader}>
        <Text style={styles.titleText}>Universitas Muhammadiyah Makassar</Text>
      </View>

      <Image
        source={require('../assets/images/unismuh.jpg')}
        style={styles.kampusImage}
        resizeMode="contain"
      />

      <View style={styles.infoCard}>
        <Text style={styles.mainText}>
          Unismuh Makassar adalah salah satu universitas swasta terkemuka di
          Sulawesi Selatan, di bawah naungan Persyarikatan Muhammadiyah.
        </Text>

        <Text style={styles.mainText}>
          Lokasi Kampus: Jl. Sultan Alauddin No.259, Gn. Sari, Kec. Rappocini,
          Kota Makassar, Sulawesi Selatan 90222
        </Text>

        <Text style={styles.mainText}>
          Beberapa fakultas yang tersedia meliputi Fakultas Keguruan dan
          Ilmu Pendidikan, Fakultas Ekonomi dan Bisnis, Fakultas Teknik, dan
          Fakultas Agama Islam.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    padding: 24,
    alignItems: 'center',
  },
  cardHeader: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1a5f7a',
    textAlign: 'center',
  },
  kampusImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#e6f7ff',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  mainText: {
    fontSize: 15,
    marginBottom: 12,
    textAlign: 'center',
    lineHeight: 24,
    color: '#333',
  },
});
