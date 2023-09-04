import { Component } from "react";
import { Text, View } from "react-native";

export default class ClassComponent extends Component{
    render() {
        const styles = {
            backgroundColor: 'blue'
        }

      return (
        <View style={styles}>
            <Text>ClassComponent Works!</Text>
        </View>
      )
    }
}