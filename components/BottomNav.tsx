import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation, NavigationProp, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../navigation/types';

export default function BottomNav() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();

  const tabs = ['Chambre', 'Accueil', 'Quêtes'];

  const icons: Record<string, ImageSourcePropType> = {
    Accueil: require('../assets/home.png'),
    Quêtes: require('../assets/quest.png'),
    Chambre: require('../assets/room.png'),
  };

  return (
    <View style={styles.absoluteWrapper}>
      <View style={styles.container}>
        {tabs.map((tab) => {
          const isActive = route.name === tab;

          return (
            <TouchableOpacity
              key={tab}
              onPress={() => navigation.navigate(tab as keyof RootStackParamList)}
              style={styles.tabItem}
              activeOpacity={0.8}
            >
              {isActive ? (
                <View style={styles.activeWrapper}>
                  <LinearGradient
                    colors={['#9E76B8', '#cbb7f0']}
                    style={styles.activeSection}
                  >
                    <Image
                      source={icons[tab]}
                      style={styles.activeIcon}
                      resizeMode="contain"
                    />
                    <Text style={styles.label}>{tab}</Text>
                  </LinearGradient>
                </View>
              ) : (
                <View style={styles.inactiveSection}>
                  <Image
                    source={icons[tab]}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  absoluteWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    zIndex: 5,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e6e0f9',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inactiveSection: {
    height: 70,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeWrapper: {
    position: 'absolute',
    top: -20,
    width: '100%',
    height: 90,
    zIndex: 10,
    alignItems: 'center',
  },
  activeSection: {
    width: 140,
    height: 90,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  icon: {
    width: 32,
    height: 32,
  },
  activeIcon: {
    width: 40,
    height: 40,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    color: '#4b3f66',
    fontWeight: '600',
  },
});
