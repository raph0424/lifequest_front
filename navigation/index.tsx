import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestListScreen from '../screens/QuestListScreen';

export type RootStackParamList = {
  Quests: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quests" component={QuestListScreen} options={{ title: 'Quêtes du jour' }} />
    </Stack.Navigator>
  );
}
