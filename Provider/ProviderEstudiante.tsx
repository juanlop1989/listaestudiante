import { View, Text } from 'react-native'
import React, { ReactNode, useState } from 'react'


interface ViewReact{
    children: ReactNode
}

export default function ProviderEstudiante() {
  
  const [id, setId] = useState(0);

  const [nombre, setNombre] = useState(String);

  return (
    <View>
      <Text>ProviderEstudiante</Text>
    </View>
  )
}