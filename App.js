import  React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"

const style = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

const FlatListBasics = () => {
  return (
    <View style={style.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Aru'},
          {key: 'Den'},
          {key: 'Donn'},
          {key: 'Dann'},
          {key: 'Deon'},
          {key: 'Duin'},
          {key: 'Dionn'},
          {key: 'Dras'},
          {key: 'Dreno'},
          {key: 'Drako'},
          {key: 'Derko'},
          {key: 'Draco'},
        ]}
        renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}
      />
    </View>
  )
}
export default FlatListBasics