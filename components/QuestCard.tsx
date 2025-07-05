import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path, Rect } from 'react-native-svg';
import MaskedView from '@react-native-masked-view/masked-view';
import { Reward } from './QuestPopup';

export interface Quest {
  id: number;
  xp: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
  colorStart: string;
  colorMid: string;
  colorEnd: string;
  rewards: Reward[];
}

interface QuestCardProps {
  quest: Quest;
  onStartPress: () => void;
}

const CARD_WIDTH = 342;
const CARD_HEIGHT = 175;

const QuestCard: React.FC<QuestCardProps> = ({ quest, onStartPress }) => {
  return (
    <View style={styles.wrapper}>
       <View style={styles.avatarContainer}>
    <Image source={quest.image} style={styles.avatar} />
    <View style={styles.buttonWrapper}>
      <Svg width="100%" height="100%">
        <Defs>
          <LinearGradient id={`button-gradient-${quest.id}`} x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#3A35CD" />
            <Stop offset="0.5" stopColor="#9E76B8" />
            <Stop offset="1" stopColor="#B7B7B7" />
          </LinearGradient>
        </Defs>

        <Rect x="0" y="0" rx="12" ry="12" width="100%" height="100%" stroke="#FFD700" strokeWidth="2" fill="none" />
        <Rect x="1" y="1" rx="10" ry="10" width={88} height={34} fill={`url(#button-gradient-${quest.id})`} />
      </Svg>

      <TouchableOpacity style={styles.buttonOverlay} onPress={onStartPress}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  </View>
      <MaskedView
        style={{ height: CARD_HEIGHT, width: CARD_WIDTH }}
        maskElement={
          <Svg width={CARD_WIDTH} height={CARD_HEIGHT} viewBox="0 0 342 175">
            <Path
              d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
              fill="black"
            />
          </Svg>
        }
      >
        <Svg width={CARD_WIDTH} height={CARD_HEIGHT}>
          <Defs>
            <LinearGradient id={`grad-${quest.id}`} x1="0" y1="128" x2="354.142" y2="128" gradientUnits="userSpaceOnUse">
              <Stop offset="0" stopColor={quest.colorStart} />
              <Stop offset="0.9999" stopColor={quest.colorMid ?? quest.colorEnd} />
              <Stop offset="1" stopColor={quest.colorEnd} />
            </LinearGradient>
          </Defs>
          <Rect width={CARD_WIDTH} height={CARD_HEIGHT} fill={`url(#grad-${quest.id})`} />
        </Svg>

        <View style={styles.content}>
          <View style={styles.left}>
            <Text
              style={{
                fontFamily: 'Cute',
                fontSize: 76,
                color: "white",
                textAlign: 'center',
              }}
            >
              {quest.xp} xp
            </Text>

            <Text style={styles.title}>{quest.title}</Text>
            <Text style={styles.description}>{quest.description}</Text>
          </View>
        </View>
      </MaskedView>
    </View>
  );
};

export default QuestCard;


const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginVertical: 12,
  },
  avatarContainer: {
  position: 'absolute',
  top: 45,
  right: 45,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 5,
},

avatar: {
  width: 100,
  height: 100,
},

  content: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 20,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    zIndex: 1,
  },
  left: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  xp: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'Aimendra',
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    marginTop: 4,
  },
  description: {
    fontSize: 12,
    color: '#fff',
    marginTop: 2,
  },

buttonWrapper: {
  marginTop: -10,
  width: 90,
  height: 36,
  borderRadius: 12,
  backgroundColor: '#6A5ACD',
  justifyContent: 'center',
  alignItems: 'center',
},
buttonOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
},

buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},
});
