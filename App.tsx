import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './navigation/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
