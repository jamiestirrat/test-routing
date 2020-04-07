import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './app/screens/Home';
import Friends from './app/screens/Friends';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends },
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
