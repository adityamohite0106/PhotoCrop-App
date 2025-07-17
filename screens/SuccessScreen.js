// screens/SuccessScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SuccessScreen({ route }) {
  const { imagePath } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>Photo Saved Successfully!</Text>
      {imagePath && <Image source={{ uri: imagePath }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  message: { fontSize: 18, marginBottom: 20 },
  image: { width: 256, height: 256, borderRadius: 10 }
});
