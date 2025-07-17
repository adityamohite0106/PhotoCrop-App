// screens/FormScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function FormScreen({ navigation }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleNext = () => {
    if (!name || !dob || !email) {
      return Alert.alert('Error', 'All fields are required.');
    }
    if (!validateEmail(email)) {
      return Alert.alert('Error', 'Invalid email format.');
    }

    navigation.navigate('ImagePicker', { name, dob, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Date of Birth</Text>
      <TextInput style={styles.input} placeholder="DD/MM/YYYY" value={dob} onChangeText={setDob} />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5 }
});
