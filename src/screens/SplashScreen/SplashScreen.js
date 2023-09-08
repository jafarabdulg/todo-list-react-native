import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import PATH from "../../navigation/NavigationPath"

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(PATH.TODO_SCREEN);
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image 
            style={styles.logo}
            source={{
                uri: "https://pbs.twimg.com/profile_images/1160067042080280577/6I4XnV2i_400x400.jpg"
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 200,
    }
})
