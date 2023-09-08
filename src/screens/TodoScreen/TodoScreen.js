import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './TodoScreen.style'
import TabBar from './components/TabBar'
import TodoList from './TodoList'

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

    const toggleComplete = (todoIndex) => {
      const {todos} = appState;
      todos.forEach(todo => {
        if(todo.id === todoIndex) {
          todo.complete = !todo.complete
        }
      })
      setAppState({...appState, todos});
    }

    const deleteTodo = (todoIndex) => {
      const {todos: currentTodos} = appState;
      const newTodos = currentTodos.filter(todo => todo.id !== todoIndex);
      setAppState({...appState, todos : newTodos})
    }

    const submitTodo = () => {
      const payload = {
        title: appState.inputValue,
        complete: false,
        id: appState.todos.length + 1
      }
      const todos = [...appState.todos, payload];
      setAppState({...appState, todos, inputValue: 7})
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
        <TodoList
        todos={appState.todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        type={appState.type}
        />
      </View>

      {/* tabBar */}
      <View style={styles.tabBarSection}>
        <TabBar type={appState.type} setType={setType} />
      </View>
    </View>
  )
}