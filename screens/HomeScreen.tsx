import { SafeAreaView,  } from 'react-native-safe-area-context';
import { Text, View, Image } from 'react-native';
import BgWrapper from '../components/BgWrapper';
import BottomNav from '../components/BottomNav';

export default function HomeScreen() {
  return (
        <BgWrapper>
    
    <SafeAreaView
      className="flex-1 bg-white"
      style={{ paddingTop: 63 }} // 48 (pt-12) + 15px
    >
      <View className="w-full items-center px-4">
        <Text
          style={{
            fontFamily: 'Aimendra',
            fontSize: 64,
            color: "yellow",
            textAlign: 'center',
            textShadowColor: 'black',
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 1,
          }}
        >
          LifeQuest
        </Text>

       <View
          style={{
            width: '100%',
            paddingHorizontal: 16,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16,  // pour espacer un peu du titre
          }}
        >
          <Text style={{ fontSize: 18, paddingBottom: 25 , color: '#FFFFFF'}}>Niveau 3</Text>
          <Text style={{ fontSize: 14, paddingBottom: 200, color: '#FFFFFF' /* équivaut à text-gray-600 */ }}>
            XP : 120 / 200
          </Text>
          <Image
          source={require('../assets/favicon.png')}
          className="w-12 h-12 mt-4"
        />
        </View>
      </View>
    </SafeAreaView>
           <BottomNav />

            </BgWrapper>

  );
}
