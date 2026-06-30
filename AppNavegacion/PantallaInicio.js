import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PantallaInicio({ navigation }) {
  const usuario = {
    nombre: 'Wanda',
    curso: 'React Native',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido a la pantalla de inicio</Text>
      <Text style={styles.texto}>Presiona el boton para ver el detalle.</Text>
      <Button
        title="Ir a Detalle"
        onPress={() => navigation.navigate('Detalle', { datos: usuario })}
      />
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
    backgroundColor: '#f7f7fb',
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
  },
});
