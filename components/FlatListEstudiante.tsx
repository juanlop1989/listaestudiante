// Components/FlatListEstudiante.tsx
import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { EstudianteContext } from '../Context/ContextApi';

export default function FlatListEstudiante() {
  const { listaEstudiante } = useContext(EstudianteContext);

  return (
    <View>
      <Text style={styles.title}>Listado de Alumnos</Text>
      <FlatList 
        data={listaEstudiante}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});
