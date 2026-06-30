import { Button, StyleSheet, Text, View } from 'react-native';

export default function PeliculaScreen({ route, navigation }) {
  const { pelicula } = route.params ?? {
    pelicula: {
      titulo: 'Interstellar',
      anio: 2014,
      genero: 'Ciencia ficcion',
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pelicula</Text>
      <Text>Titulo: {pelicula.titulo}</Text>
      <Text>Anio: {pelicula.anio}</Text>
      <Text>Genero: {pelicula.genero}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
