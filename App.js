import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TodoScreen from './src/screens/TodoScreen/TodoScreen';
export default function App() {

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>This is my first Expo!</Text> */}
      <TodoScreen />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
