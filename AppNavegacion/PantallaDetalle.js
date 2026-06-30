import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PantallaDetalle({ route, navigation }) {
  const { datos = { nombre: 'Wanda', curso: 'React Native' } } =
    route.params ?? {};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalle recibido</Text>
      <Text style={styles.texto}>Nombre: {datos.nombre}</Text>
      <Text style={styles.texto}>Curso: {datos.curso}</Text>
      <View style={styles.botones}>
        <Button
          title="Ir a Acerca de"
          onPress={() => navigation.navigate('AcercaDe')}
        />
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    padding: 24,
    backgroundColor: '#eef8f3',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
  },
  botones: {
    width: '100%',
    gap: 10,
  },
});
