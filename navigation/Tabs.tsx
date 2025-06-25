import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import QuestListScreen from '../screens/QuestListScreen';
import RoomScreen from '../screens/RoomScreen'; // à créer plus tard

const Tab = createMaterialTopTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: 'none' }, // pas de barre visible
        swipeEnabled: true,               // swipe activé
      }}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Quêtes" component={QuestListScreen} />
      <Tab.Screen name="Chambre" component={RoomScreen} />
    </Tab.Navigator>
  );
}
