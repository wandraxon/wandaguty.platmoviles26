import { Button, StyleSheet, Text, View } from 'react-native';

export default function ContactoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contacto</Text>
      <Text>Email: contacto@appeliculas.com</Text>
      <Text>Telefono: 11 5555 1234</Text>
      <Button title="Volver al inicio" onPress={() => navigation.navigate('Home')} />
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
