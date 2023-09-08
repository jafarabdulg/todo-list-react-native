import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import todoStyles from './Todo.style';

export default function Todo({ todo, toggleComplete, deleteTodo }) {
    return (
        <View>
            <Text
            style={[
                todoStyles.text,
                toggleComplete ? todoStyles.todoComplete : null
            ]}
            >
                {todo.title}
            </Text>

            <View style={todoStyles.buttonWrapper}>
                <TouchableOpacity>
                    <Text>Complete</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}