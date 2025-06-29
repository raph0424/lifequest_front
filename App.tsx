import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation/Stack';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Aimendra: require('./assets/fonts/Almendra-Regular.ttf'),
    Cute: require('./assets/fonts/CuteFont-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
