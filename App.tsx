import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert } from 'react-native';

interface Dish {
  name: string;
  description: string;
  course: string;
  price: string;
}

type HomeScreenProps = {
  navigation: any;
  route: any;
};

const HomeScreen = ({ navigation, route }: HomeScreenProps) => {
  const dishes: Dish[] = route.params?.dishes || [];

  const handleRemoveDish = (index: number) => {
    Alert.alert(
      'Remove Dish',
      'Are you sure you want to remove this dish from the menu?',
      [
        { text: 'Cancel' },
        { 
          text: 'Remove', 
          onPress: () => {
            const updatedDishes = [...dishes];
            updatedDishes.splice(index, 1);
            route.params?.setDishes(updatedDishes);
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menu</Text>

      <FlatList
        data={dishes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.dishItem}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course}</Text>
            <Text>{item.price}</Text>
            <Button title="Remove" onPress={() => handleRemoveDish(index)} />
          </View>
        )}
      />
      
      <Button
        title="Add Dish"
        onPress={() => navigation.navigate('AddDish', { dishes, setDishes: route.params?.setDishes })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E9F4F5',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  dishItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;