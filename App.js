import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import axios from 'axios';

axios.defaults.baseURL = "https://pokeapi.co/api/v2"

export default function App() {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}
