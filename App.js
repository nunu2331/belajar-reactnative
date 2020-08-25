import  React from "react"
import { FlatList, StyleSheet, Text, View, SectionList } from "react-native"

const FlexDimensionBasics = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'papayawhip'}}/>
      <View style={{flex: 2, backgroundColor: 'peachpuff'}}/>
      <View style={{flex: 3, backgroundColor: 'peru'}}/>
    </View>
  )
}

export default FlexDimensionBasics