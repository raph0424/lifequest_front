import { View, Text, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export interface Reward {
  emoji: string;
  label: string;
  amount: number;
}

interface QuestPopupProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  location: string;
  objective: string;
  description: string;
  rewards: Reward[];
}

export default function QuestPopup({
  visible,
  onClose,
  title,
  location,
  objective,
  description,
  rewards,
}: QuestPopupProps) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <LinearGradient
        colors={['#6a00ff', '#8e8cff']}
        start={[0, 0]}
        end={[0, 1]}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            borderRadius: 16,
            borderColor: '#fff',
            borderWidth: 1,
            padding: 24,
            width: '85%',
          }}
        >
          <Text className="text-white text-2xl font-bold text-center mb-2">{title}</Text>
          <Text className="text-yellow-300 text-sm text-center mb-4">📍 {location}</Text>

          <Text className="text-white text-lg mb-2">▶ {objective}</Text>
          <Text className="text-white text-sm mb-4">{description}</Text>

          <Text className="text-white font-bold mb-2">🎁 Récompenses :</Text>
          <View className="flex-row flex-wrap mb-4">
            {rewards.map((reward, index) => (
              <View key={index} className="flex-row items-center mr-4 mb-2">
                <Text className="text-2xl mr-1">{reward.emoji}</Text>
                <Text className="text-white text-sm">{reward.amount}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            onPress={onClose}
            className="bg-yellow-400 rounded-full py-3"
            style={{ shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 4 }}
          >
            <Text className="text-center text-lg font-bold text-purple-800">Start Quest</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Modal>
  );
}
