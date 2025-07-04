// screens/QuestSelectionScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import QuestCard, { Quest } from '../components/QuestCard';
import BgQuest from '../components/BgQuest';
import BottomNav from '../components/BottomNav';
import QuestPopup from '../components/QuestPopup';

const staticQuests: Quest[] = [
  {
    id: 1,
    xp: 50,
    title: 'Water Magic',
    description: 'Cast a spell on laundry !',
    image: require('../assets/mascots/jester.png'),
    colorStart: '#53C9C9',
    colorMid: '#D8D8D8',
    colorEnd: '#F2F2F2',
    rewards: [
      { emoji: '🧼', label: 'Savon', amount: 1 },
      { emoji: '⭐', label: 'XP', amount: 10 },
      { emoji: '💎', label: 'Gemme', amount: 1 },
    ],
  },
  {
    id: 2,
    xp: 200,
    title: 'Muscles Overload',
    description: 'Get BIG and STRONG',
    image: require('../assets/mascots/karateka.png'),
    colorStart: '#B53131',
    colorMid: '#E88787',
    colorEnd: '#FFFAFA',
    rewards: [
      { emoji: '🧼', label: 'Savon', amount: 1 },
      { emoji: '⭐', label: 'XP', amount: 10 },
      { emoji: '💎', label: 'Gemme', amount: 1 },
    ],
  },
  {
    id: 3,
    xp: 999,
    title: 'Big Time Event',
    description: 'Time to put those social skills to use',
    image: require('../assets/mascots/kiffeur.png'),
    colorStart: '#B47536',
    colorMid: '#FFCF0F',
    colorEnd: '#842A2C',
    rewards: [
      { emoji: '🧼', label: 'Savon', amount: 1 },
      { emoji: '⭐', label: 'XP', amount: 10 },
      { emoji: '💎', label: 'Gemme', amount: 1 },
    ],
  },
  {
    id: 4,
    xp: 50,
    title: 'Washing Magic',
    description: 'Cast a spell on laundry !',
    image: require('../assets/mascots/late.png'),
    colorStart: '#53C9C9',
    colorMid: '#D8D8D8',
    colorEnd: '#F2F2F2',
    rewards: [
      { emoji: '🧼', label: 'Savon', amount: 1 },
      { emoji: '⭐', label: 'XP', amount: 10 },
      { emoji: '💎', label: 'Gemme', amount: 1 },
    ],
  },
  {
    id: 5,
    xp: 200,
    title: 'Muscles Overload',
    description: 'Get BIG and STRONG',
    image: require('../assets/mascots/mage.png'),
    colorStart: '#B53131',
    colorMid: '#E88787',
    colorEnd: '#FFFAFA',
    rewards: [
      { emoji: '🧼', label: 'Savon', amount: 1 },
      { emoji: '⭐', label: 'XP', amount: 10 },
      { emoji: '💎', label: 'Gemme', amount: 1 },
    ],
  },
  {
    id: 6,
    xp: 999,
    title: 'Big Time Event',
    description: 'Time to put those social skills to use',
    image: require('../assets/mascots/pouce.png'),
    colorStart: '#B47536',
    colorMid: '#FFCF0F',
    colorEnd: '#842A2C',
    rewards: [
      { emoji: '🧼', label: 'Savon', amount: 1 },
      { emoji: '⭐', label: 'XP', amount: 10 },
      { emoji: '💎', label: 'Gemme', amount: 1 },
    ],
  },
];

const QuestSelectionScreen: React.FC = () => {

const [popupVisible, setPopupVisible] = useState(false);
const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

  return (
    <BgQuest>
      <View style={styles.container}>
        <Text style={styles.title}>Quest Tab</Text>
        <TextInput
          placeholder="Search for a specific Quest"
          style={styles.input}
          placeholderTextColor="#aaa"
        />
        <ScrollView>
          {staticQuests.map((quest) => (
            <QuestCard key={quest.id} quest={quest} onStartPress={() => {
              setSelectedQuest(quest);
              setPopupVisible(true);
            }} />
          ))}
        </ScrollView>
      </View>
      {selectedQuest && (
        <QuestPopup
          visible={popupVisible}
          onClose={() => setPopupVisible(false)}
          title={selectedQuest.title}
          location="paris"
          objective="tuer Macron"
          description={selectedQuest.description}
          rewards={selectedQuest.rewards}
        />
      )}
      <BottomNav />
    </BgQuest>
    
  );
};

export default QuestSelectionScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
        paddingBottom: 70,  // <--- ici on laisse de la place pour la bottom nav

  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 16,
    padding: 10,
    fontSize: 16,
  },
});
