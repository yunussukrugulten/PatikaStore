import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


import PatikaSearchBar from './components/searchBar';
import PatikaProductCard from './components/productCard';
import PatikaProductData from './components/data/Products.json';

export default function App() {
  const renderProducts = ({item}) => <PatikaProductCard products={item} />;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PATIKASTORE</Text>
            <FlatList
                numColumns={2}
                ListHeaderComponent={() => (<PatikaSearchBar />)}
                keyExtractor={item => item.id.toString()}
                data={PatikaProductData}
                renderItem={renderProducts}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'left',
    color: 'purple',
    margin: 10,
  },
});