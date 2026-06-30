import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function PantallaAcercaDe({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acerca de esta app</Text>
      <Text style={styles.texto}>
        App creada para practicar navegacion con StackNavigator.
      </Text>
      <Button
        title="Volver al inicio"
        onPress={() => navigation.navigate('Inicio')}
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
    backgroundColor: '#fff8ee',
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
