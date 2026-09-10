import { View, Image, StyleSheet, TextInput, FlatList } from 'react-native';
import Produto from './Produto';

const produtos = [
  {
    nome: 'Batata & Bacon',
    descricao: 'Batata frita, bacon, Catupiry e parmesão.',
    preco: 'R$ 79,90',
    imagem: require('./img-reais/pizza-batata.png')
  },
  {
    nome: 'Contrafilé Especial',
    descricao: 'Contrafilé, gorgonzola, tomate-cereja e cebola roxa.',
    preco: 'R$ 89,90',
    imagem: require('./img-reais/pizza-contrafile.png')
  },
  {
    nome: 'Salmão Cream Cheese',
    descricao: 'Salmão, cream cheese, tarê, cebolinha e gergelim.',
    preco: 'R$ 94,90',
    imagem: require('./img-reais/pizza salmao.png')
  },
  {
    nome: 'Camarão Cremoso',
    descricao: 'Camarão empanado, Catupiry e alho crocante.',
    preco: 'R$ 99,90',
    imagem: require('./img-reais/pizza-camarao.png')
  },
  {
    nome: 'Nachos Mexicana',
    descricao: 'Nachos, carne, cheddar, jalapeño e sour cream.',
    preco: 'R$ 84,90',
    imagem: require('./img-reais/pizza-mexicana.png')
  },
  {
    nome: 'Costela BBQ',
    descricao: 'Costela desfiada, barbecue, Catupiry e cebola crispy.',
    preco: 'R$ 89,90',
    imagem: require('./img-reais/pizza-costela.png')
  },
  {
    nome: 'Nutella',
    descricao: 'Nutella, M&M’s de amendoim e lascas de avelã.',
    preco: 'R$ 74,90',
    imagem: require('./img-reais/pizza-nutella.png')
  },
  {
    nome: 'Pistache',
    descricao: 'Pistache, massa kadaif crocante e creme de pistache.',
    preco: 'R$ 79,90',
    imagem: require('./img-reais/pizza-pistache.png')
  },
  {
    nome: 'Banoffee',
    descricao: 'Banana, doce de leite, Biscoff, chantilly e canela.',
    preco: 'R$ 69,90',
    imagem: require('./img-reais/pizza-banoffe.png')
  }
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <View style={styles.lateral}>
          <Image
            source={require('./img/logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.centroTopo}>
          <Image
            source={require('./img/logo-frase.png')}
            style={styles.logoFrase}
          />
        </View>

        <View style={styles.lateral}>
          <TextInput
            placeholder="Pesquisar"
            style={styles.pesquisa}
          />
        </View>
      </View>

      <FlatList
        data={produtos}
        renderItem={({ item }) => <Produto produto={item} />}
        numColumns={3}
        columnWrapperStyle={styles.linha}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf5'
  },

  topo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },

  lateral: {
    width: 270,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },

  logoFrase: {
    width: 420,
    height: 170,
    resizeMode: 'contain'
  },

  pesquisa: {
    width: 130,
    height: 42,
    backgroundColor: '#ffffec',
    borderWidth: 3,
    borderColor: '#f7b027',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 15,
    outlineStyle: 'none'
  },

  linha: {
    justifyContent: 'center'
  }
});