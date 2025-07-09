import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation/Stack';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { suppressPixelStoreiWarnings } from './expo-gl-mute';

export default function App() {
  const [fontsLoaded] = useFonts({
    Aimendra: require('./assets/fonts/Almendra-Regular.ttf'),
    Cute: require('./assets/fonts/CuteFont-Regular.ttf'),
    Cinzel: require('./assets/fonts/Cinzel-Regular.ttf'),
  'Cinzel-Bold': require('./assets/fonts/Cinzel-Bold.ttf'),
  });

  suppressPixelStoreiWarnings()
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
