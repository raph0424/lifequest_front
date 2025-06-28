import { ImageBackground } from 'react-native';

export default function BgQuest({ children }: { children: React.ReactNode }) {
  return (
    <ImageBackground
      source={require('../assets/bg2.png')}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      {children}
    </ImageBackground>
  );
}