import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import todoStyles from './Todo.style';
import TodoButton from '../../../shared/components/TodoButton';

export default function Todo({ todo, toggleComplete, deleteTodo }) {
    return (
        <View style={todoStyles.container}>
            <Text
            style={[
                todoStyles.text,
                todo.complete ? todoStyles.todoComplete : null
            ]}
            >
                {todo.title}
            </Text>

            <View style={todoStyles.buttonWrapper}>
                <TodoButton
                nameIcon={"checkmark-done-circle-outline"}
                onPress={() => toggleComplete(todo.id)}
                colorIcon={'green'}
                />
                <TodoButton
                nameIcon={"close-circle-outline"}
                onPress={() => toggleComplete(todo.id)}
                colorIcon={'red'}
                />
            </View>
        </View>
    );
}