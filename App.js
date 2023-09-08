import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TodoScreen from './src/screens/TodoScreen/TodoScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import AppNavigation from './src/navigation/RootNavigator';
export default function App() {

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>This is my first Expo!</Text> */}
      {/* <TodoScreen /> */}
      {/* <SplashScreen /> */}
      <AppNavigation />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
