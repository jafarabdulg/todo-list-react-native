import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Todo from './components/Todo';

export default function TodoList(props) {
    const {
        todos,
        toggleComplete,
        deleteTodo,
        type
    } = props

    const getVisibleTodos = () => {
        switch (type) {
            case "All":
                return todos;
            case "Complete":
                return todos.filter((todo) => todo.complete);
            case "Active":
                return todos.filter((todo) => !todo.complete);
            default:
                break;
        }
    }

  return (
    <FlatList
    data={getVisibleTodos()}
    renderItem={({item}) => (
        <Todo
        todo={item}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        />
    )}
    keyExtractor={(item) => item.id.toString()}
    ListEmptyComponent={() => <Text>Data Kosong</Text>}
    />
  )
}
