import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { EstudianteProvider } from './Provider/ProviderEstudiante';
import ConsumerEstudiante from './Consumer/ConsumerEstudiante';

export default function App() {
  return (
    <View style={styles.container}>
    <EstudianteProvider >
      <ConsumerEstudiante />
    </EstudianteProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
