import { View, StyleSheet, Text } from 'react-native';
import BgWrapper from '../components/BgWrapper';
import BottomNav from '../components/BottomNav';
import { Canvas } from '@react-three/fiber/native';
import { Warrior } from '../components/Warrior';
import { Suspense } from 'react';
import XpCircle from '../components/xpcircle';

export default function HomeScreen() {
  return (
    <BgWrapper>
      <View style={styles.header}>
        <XpCircle percentage={65} size={80} />

        <Text style={styles.title}>LifeQuest</Text>
        
      </View>
      <View style={styles.canvasContainer}>
        <Canvas camera={{ position: [-1.4, 0.1, 4], fov: 20 }} onCreated={(state) => {
  const _gl = state.gl.getContext();
  const pixelStorei = _gl.pixelStorei.bind(_gl);
  _gl.pixelStorei = function (...args) {
    const [parameter] = args;
    switch (parameter) {
      case _gl.UNPACK_FLIP_Y_WEBGL:
        return pixelStorei(...args);
    }
  };
}} >
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
    fontWeight: 'regular',
    color: '#fff',
    paddingLeft: 30,
    marginBottom: 10,
        fontFamily: 'Cinzel',

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
