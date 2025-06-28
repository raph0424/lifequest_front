import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { RootStackParamList } from './types'; // importe le type
import HomeScreen from '../screens/HomeScreen';
import QuestListScreen from '../screens/QuestListScreen';
import RoomScreen from '../screens/RoomScreen';

const Stack = createStackNavigator<RootStackParamList>(); // <--- Typage ici

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    >
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Quêtes" component={QuestListScreen} />
      <Stack.Screen name="Chambre" component={RoomScreen} />
    </Stack.Navigator>
  );
}
