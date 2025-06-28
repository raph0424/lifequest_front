import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView,  } from 'react-native-safe-area-context';
import BgQuest from '../components/BgQuest';
import BottomNav from '../components/BottomNav';


const quests = [
  { id: '1', title: 'Faire la vaisselle', xp: 10 },
  { id: '2', title: '20 min de sport', xp: 15 },
  { id: '3', title: 'Aller acheter du pain', xp: 5 },
];

export default function QuestListScreen() {
  return (
    <BgQuest>
    <SafeAreaView  className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Quêtes du jour</Text>

      <FlatList
        data={quests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-blue-100 p-4 rounded-xl mb-4">
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-gray-600">Récompense : {item.xp} XP</Text>
            <TouchableOpacity className="mt-2 bg-blue-500 py-2 px-4 rounded-xl">
              <Text className="text-white text-center">Valider</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
         <BottomNav />

        </BgQuest>

  );
}
