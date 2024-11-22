import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

type AddDishScreenProps = {
  navigation: any;
  route: any;
};

const AddDishScreen = ({ navigation, route }: AddDishScreenProps) => {
  const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [course, setCourse] = useState('starters');
  const [price, setPrice] = useState('');
  
  const { dishes, setDishes } = route.params;

  const handleAddDish = () => {
    if (!dishName || !dishDescription || !price || !course) {
      Alert.alert('Error', 'Please fill in all fields before submitting.');
      return;
    }

    const newDish = {
      name: dishName,
      description: dishDescription,
      course,
      price,
    };

    const updatedDishes = [...dishes, newDish];
    setDishes(updatedDishes);

    // Navigate back to HomeScreen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dish Description"
        value={dishDescription}
        onChangeText={setDishDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price (in ZAR)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Button title="Add Dish" onPress={handleAddDish} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E9F4F5',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default AddDishScreen;
