import  React from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native'

const App = () => {
  return (
    <ScrollView>
      <Text>Ini teks</Text>
      <View>
        <Text>
          some more teks
        </Text>
        <Image 
        source={{
          uri:
          'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200}}
        />
      </View>
      <TextInput 
        style={{
          height: 400,
          borderColor: "gray",
          borderWidth: 1
        }}
        defaultValue="bisa diisi ini gan"
      />
    </ScrollView>
  )
}

export default App