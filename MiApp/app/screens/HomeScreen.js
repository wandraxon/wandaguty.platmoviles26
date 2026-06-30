import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function Card({ titulo, children, imagen, color, boton }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Image source={imagen} style={styles.imagen} />
      <Text style={styles.subtitulo}>{titulo}</Text>
      <Text>{children}</Text>
      <Button title={boton} onPress={() => Alert.alert(titulo)} />
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  const [activo, setActivo] = useState(false);
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');
  const [formulario, setFormulario] = useState({ nombre: '', password: '' });
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const pelicula = {
    titulo: 'Interstellar',
    anio: 2014,
    genero: 'Ciencia ficcion',
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setUsuarios(json);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const encabezado = (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hola, Wanda</Text>
      <Text>App de practicas de React Native con Expo.</Text>


      <Text style={styles.subtitulo}>Clase 02 - Card</Text>
      <View style={styles.bloque}>
        <Card
          titulo="Tarjeta de React Native"
          imagen={require('../../assets/icon.png')}
          color="lightblue"
          boton="Ver React"
        >
          Esta tarjeta usa props y children.
        </Card>
        <Card
          titulo="Tarjeta de Expo"
          imagen={require('../../assets/splash-icon.png')}
          color="lightgreen"
          boton="Ver Expo"
        >
          Esta tarjeta tiene otra imagen y otro color.
        </Card>
        <Card
          titulo="Tarjeta de App"
          imagen={require('../../assets/android-icon-foreground.png')}
          color="#fff3b0"
          boton="Ver App"
        >
          Esta es la tercera tarjeta diferente.
        </Card>
      </View>


          <Text style={styles.subtitulo}>Clase 03 - Flexbox y useState</Text>
      <View style={styles.bloque}>
        
        <View style={styles.fila}>
          <View style={[styles.caja, styles.roja]}>
            <Text>1</Text>
          </View>
          <Pressable
            style={[styles.caja, activo ? styles.azul : styles.verde]}
            onPress={() => setActivo(!activo)}
          >
            <Text>Tocar</Text>
          </Pressable>
          <View style={[styles.caja, styles.amarilla]}>
            <Text>3</Text>
          </View>
        </View>
      </View>


      <Text style={styles.subtitulo}>useState - contador e input</Text>
      <View style={styles.bloque2}>
        
        <Text>Valor: {contador}</Text>
        <Button title="Sumar" onPress={() => setContador(contador + 1)} />
        <TextInput
          style={styles.input}
          placeholder="Escribi algo"
          value={texto}
          onChangeText={setTexto}
        />
        <Text>Escribiste: {texto}</Text>
      </View>


      <Text style={styles.subtitulo}>Clase 04 - Formulario</Text>
      <View style={styles.bloque2}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={formulario.nombre}
          onChangeText={(valor) =>
            setFormulario({ ...formulario, nombre: valor })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Contrasena"
          secureTextEntry
          value={formulario.password}
          onChangeText={(valor) =>
            setFormulario({ ...formulario, password: valor })
          }
        />
        {formulario.nombre !== '' && formulario.password !== '' ? (
          <Text>Hola, {formulario.nombre}</Text>
        ) : null}
      </View>


      <Text style={styles.subtitulo}>AppPeliculas</Text>
      <View style={styles.bloque2}>
        <Button
          title="Ir a Pelicula"
          onPress={() => navigation.navigate('Pelicula', { pelicula })} style={{ margin: 10}}
        />
        <Button style={{ margin: 10 }} title="Ir a Contacto" onPress={() => navigation.navigate('Contacto')}  />
      </View>

      <Text style={styles.subtitulo}>Clase 05 - API y FlatList</Text>
      <View style={styles.bloque}>
        
        {loading ? <ActivityIndicator size="large" color="blue" /> : null}
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={usuarios}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={encabezado}
      renderItem={({ item }) => (
        <View style={styles.usuario}>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: 'salmon',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bloque: {
    width: '100%',
    opacity: 0.8,
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bloque2: {
    backgroundColor: '#ffffff',
    opacity: 0.8,
    padding: 10,
    width: '30%',
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 10,
    padding: 10,
  },
  imagen: {
    width: 70,
    height: 70,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  caja: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roja: {
    backgroundColor: 'red',
  },
  verde: {
    backgroundColor: 'green',
  },
  azul: {
    backgroundColor: 'blue',
  },
  amarilla: {
    backgroundColor: 'yellow',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
  },
  usuario: {
    borderWidth: 1,
    borderColor: '#dddddd',
    marginBottom: 8,
    padding: 10,
  },
});
