import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './TodoScreen.style'
import TabBar from './components/TabBar'

const todoDummy = [
    {id: 1, title: 'olahraga', complete: true},
    {id: 2, title: 'ngoding', complete: false},
    {id: 3, title: 'ngopi', complete: true},
]

export default function TodoScreen() {
    const [appState, setAppState] = useState({
        type: 'All',
        todos: [...todoDummy],
        inputValue: ''
    });

    const setType = (type) => {
        setAppState({...appState, type})
    }

  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={styles.headerSection}>
        <Text style={{
            textAlign: 'center',
            fontSize: 52,
        }}>Todos</Text>
      </View>

      {/* form add list */}
      <View style={styles.formSection}>
        <Text>Ini form</Text>
      </View>

      {/* list */}
      <View style={styles.listSection}>
        <FlatList
        data={todoDummy}
        renderItem={({item}) => (
            <Text>{item.id}, {item.title}, {item.complete ? 'Complete':'Uncomplete'}</Text>
        )}
        keyExtractor={item => item.id.toString()}
        />
      </View>

      {/* tabBar */}
      <View style={styles.tabBarSection}>
        <TabBar type={appState.type} setType={setType} />
      </View>
    </View>
  )
}