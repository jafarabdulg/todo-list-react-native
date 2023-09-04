import { StatusBar } from 'expo-status-bar';
import { Image, PixelRatio, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import ExampleComponent from './src/component/ExampleComponent';
import Greeting from './src/component/Greeting';
import ClassComponent from './src/component/ClassComponent';

export default function App() {
  const dp = (size) => {
    return size * PixelRatio.get();
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>This is my first Expo!</Text>
        <ExampleComponent />
        <Greeting />
        <ClassComponent />

        <Text>Input sesuatu:</Text>
        <TextInput style={{ borderWidth: 1, padding: dp(4) }} placeholder='input something' />
        <Image source={{uri:"https://www.stpgoods.com/media/catalog/product/cache/5e44578c7bcfaf8897aa535acf055f26/1/7/178859.jpg",
        width: 200, height: 200}} />
        <Image source={require('./assets/icon.png')} style={{width: 100, height: 100}} />

        <Text style={styles.footerText}>Thanks for coming!</Text>
        <StatusBar backgroundColor='khaki' hidden={false} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'red',
    fontSize: 30,
    marginBottom: 5
  },
  footerText: {
    backgroundColor: 'black',
    color: 'grey',
    marginTop: 25
  }
});
