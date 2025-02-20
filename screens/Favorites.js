import React from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import BottomTabs from '../components/home/BottomTabs';
import { Divider } from 'react-native-elements';

const Favorites = ({ navigation, favorites = [] }) => {
  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No favorites yet!</Text>
      <Text style={styles.emptySubText}>Your favorite items will appear here.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={renderEmptyList} // Show this when the list is empty
      />
            <Divider width={1} />
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  emptySubText: {
    fontSize: 14,
    color: '#aaa',
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});

export default Favorites;