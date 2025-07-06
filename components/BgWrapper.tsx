import { ImageBackground } from 'react-native';

export default function BgWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ImageBackground
      source={require('../assets/bg3.png')}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      {children}
    </ImageBackground>
  );
}