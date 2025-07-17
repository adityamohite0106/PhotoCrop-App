// screens/ImagePickerScreen.js
import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';

export default function ImagePickerScreen({ navigation }) {
  const [croppedImage, setCroppedImage] = useState(null);

  const pickImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 256,
        height: 256,
        cropping: true,
        cropperCircleOverlay: false,
        compressImageQuality: 1,
        cropperToolbarTitle: 'Crop Photo',
        includeBase64: false,
        mediaType: 'photo'
      });
      setCroppedImage(image);
    } catch (err) {
      console.log(err);
    }
  };

  const saveImage = async () => {
    if (!croppedImage?.path) return Alert.alert('Error', 'No image selected');
    const fileName = `profile_${Date.now()}.jpg`;
    const destPath = `${RNFS.ExternalDirectoryPath}/${fileName}`;

    try {
      await RNFS.copyFile(croppedImage.path, destPath);
      navigation.navigate('Success', { imagePath: `file://${destPath}` });
    } catch (error) {
      Alert.alert('Error', 'Failed to save image');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Choose and Crop Photo" onPress={pickImage} />
      {croppedImage && (
        <>
          <Image source={{ uri: croppedImage.path }} style={styles.image} />
          <Button title="Save Image" onPress={saveImage} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  image: { width: 256, height: 256, marginVertical: 20 }
});
