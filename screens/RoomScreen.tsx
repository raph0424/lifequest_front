import { View, Text } from 'react-native';
import { SafeAreaView,  } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';


export default function RoomScreen() {
  return (
    <><SafeAreaView className="flex-1 justify-center items-center bg-transparent">
      <Text className="text-xl font-bold">Ta chambre personnalisée 🏠</Text>
    </SafeAreaView><BottomNav /></>
    
  );
}
