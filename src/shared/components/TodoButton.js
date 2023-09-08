import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableHighlight } from 'react-native'

export default function TodoButton({ onPress, nameIcon, colorIcon }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Ionicons name={nameIcon} color={colorIcon} size={26} />
    </TouchableHighlight>
  )
}