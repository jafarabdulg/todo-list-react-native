import React from "react";
import { View, Text } from "react-native";

export default function ExampleComponent() {

    const name = 'Jafar';

    return (
        <View style={{alignItems:'center'}}>
            <Text>ExampleComponent Works!</Text>
            <Text>My Name is {name}</Text>
        </View>
    )
}
