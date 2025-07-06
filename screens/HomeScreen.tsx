import { View, StyleSheet, Text } from 'react-native';
import BgWrapper from '../components/BgWrapper';
import BottomNav from '../components/BottomNav';
import { Canvas } from '@react-three/fiber/native';
import { Warrior } from '../components/Warrior';
import { Suspense } from 'react';

export default function HomeScreen() {
  return (
    <BgWrapper>
      <View style={styles.header}>
        <Text style={styles.title}>LifeQuest</Text>
        <View style={styles.xpBarContainer}>
          <View style={styles.xpBarFill} />
        </View>
      </View>

      <View style={styles.canvasContainer}>
        <Canvas camera={{ position: [-1.4, 0.1, 4], fov: 20 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
          <Suspense fallback={null}>
            <Warrior />
          </Suspense>
        </Canvas>
      </View>

      <BottomNav />
    </BgWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  xpBarContainer: {
    height: 12,
    backgroundColor: '#333',
    borderRadius: 8,
    overflow: 'hidden',
  },
  xpBarFill: {
    width: '40%', // Set your XP %
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  canvasContainer: {
    flex: 1,
  },
});
