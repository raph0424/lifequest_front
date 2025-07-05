import { View, Text, TouchableOpacity, Modal, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-native-reanimated';


export interface Reward {
  emoji: string;
  label: string;
  amount: number;
}

interface QuestPopupProps {
  visible: boolean;
  onClose: () => void;
  onStart: () => void;  
  title: string;
  location: string;
  objective: string;
  description: string;
  rewards: Reward[];
}

const { width } = Dimensions.get('window');

export default function QuestPopup({
  visible,
  onClose,
  onStart,
  title,
  location,
  objective,
  description,
  rewards,
}: QuestPopupProps) {
  return (
    
<Modal transparent visible={visible} animationType="none">
  <View style={styles.overlay}>
    <Animated.View
      entering={ZoomIn.springify().damping(15)}
      exiting={ZoomOut.springify().damping(20)}
      style={styles.animatedContainer}
    >
      <ImageBackground
        source={require('../assets/frame.png')}
        resizeMode="contain"
        style={styles.container}
      >
          <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.location}>📍 {location}</Text>

            <View style={styles.separator} />
            <View style={styles.section}>

            <Text style={styles.objective}>▶ {objective}</Text>
            <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.separator} />
            <View style={styles.section}>

            <Text style={styles.rewardsLabel}>Quest Rewards:</Text>
                        </View>

            <View style={styles.rewardsContainer}>
              {rewards.map((reward, index) => (
                <View key={index} style={styles.rewardItem}>
                  <Text style={styles.rewardEmoji}>{reward.emoji}</Text>
                  <Text style={styles.rewardAmount}>{reward.amount}</Text>
                </View>
              ))}
            </View>

<TouchableOpacity onPress={onStart} style={styles.buttonOuter}>
  <View style={styles.buttonInner}>
    <LinearGradient
      colors={['#FFE680', '#FFD233', '#E6A800']} // light to darker yellow
      start={[0, 0]}
      end={[0, 1]}
      style={styles.buttonGradient}
    >
      <Text style={styles.buttonText}>Start Quest</Text>
    </LinearGradient>
  </View>
</TouchableOpacity>
          </View>
        </ImageBackground>
    </Animated.View>
  </View>
</Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: width * 0.9,
    aspectRatio: 3 / 4, // Adjust this if needed to match your image ratio
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    width: 150,
    color: '#FCEDA2',
    fontFamily: 'Cinzel-Bold',
    textAlign: 'center',
  },
  location: {
    fontSize: 12,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 12,
    fontFamily: 'Cinzel',
  },
   section: {
            width: width * 0.6,
    paddingLeft: 6,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  separator: {
    height: 1,
    backgroundColor: '#555',
    marginVertical: 10,
    alignSelf: 'stretch',
  },
  objective: {
    fontSize: 14,
    color: '#FCEDA2',
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 8,
    fontFamily: 'Cinzel',
  },
  description: {
    fontSize: 10,
    color: '#FFD700',
    marginBottom: 16,
    fontFamily: 'Cinzel',
    textAlign: 'center',
  },
  rewardsLabel: {
    color: '#FCEDA2',
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: 'Cinzel',
  },
  rewardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  rewardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 8,
  },
  rewardEmoji: {
    fontSize: 24,
    marginRight: 4,
  },
  rewardAmount: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Cinzel',
  },
  buttonOuter: {
  borderRadius: 40,
  overflow: 'hidden',
  alignSelf: 'center',
  borderWidth: 2,
  borderColor: '#FFD700', // Outer border color
},

animatedContainer: {
  justifyContent: 'center',
  alignItems: 'center',
},


buttonInner: {
  borderRadius: 40,
  overflow: 'hidden',
  margin: 2, // creates spacing for the inner border effect
},

buttonGradient: {
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 16,
},

buttonText: {
  color: '#2b1055',
  fontSize: 20,
  textAlign: 'center',
  fontFamily: 'Cinzel-Bold',
},

});
