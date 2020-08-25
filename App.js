import  React from "react"
import { FlatList, StyleSheet, Text, View, SectionList } from "react-native"

const FixedDimensionBasics =() => {
  return (
    <View>
      <View style= {{width: 50, height: 50, backgroundColor: 'powderblue'}} />
      <View style= {{width: 100, height: 100, backgroundColor: 'skyblue'}} />
      <View style= {{width: 500, height: 500, backgroundColor: 'steelblue'}} />
    </View>
  )
}

export default FixedDimensionBasics