import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

export default function Produto({ produto }) {
  return (
    <View style={styles.card}>
      <Image source={produto.imagem} style={styles.imagem} />

      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>

      <Pressable style={styles.botao}>
        <Text style={styles.textoBotao}>ADICIONAR AO PEDIDO</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 450,
    backgroundColor: '#ffffec',
    borderRadius: 15,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f7b027'
  },

  imagem: {
    width: 250,
    height: 250,
    borderRadius: 12
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },

  descricao: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10
  },

  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d62828',
    marginTop: 10
  },

  botao: {
    marginTop: 10,
    backgroundColor: '#b91c1c',
    padding: 10,
    borderRadius: 20
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold'
  }
});