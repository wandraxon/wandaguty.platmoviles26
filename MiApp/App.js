import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import StackNavigation from './app/navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <StackNavigation />
    </NavigationContainer>
  );
}
