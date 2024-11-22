import { createStackNavigator } from '@react-navigation/stack';
import{ createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import AddDishScreen from '../AddDishScreen';

const screens = {
  Home: {
    screen: Home
    },
    AddDishScreen: {
      screen: AddDishScreen
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);