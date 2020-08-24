import  React from 'react'
import { Text, TextInput, View } from 'react-native'

const cat = () => {
  return (
    <View>
      <Text>Halo, Aku adalah...</Text>
      <TextInput
        style={{
          height: 40 ,
          borderColor: "gray" ,
          borderWidth: 1
        }}
        defaultValue="Name Me!"
      />
    </View>
  )
}

export default cat 