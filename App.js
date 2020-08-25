import  React from "react"
import { FlatList, StyleSheet, Text, View, SectionList } from "react-native"

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop:2,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:2,
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'rgba(274,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'A', data: ['Agus', 'Amri', 'AkuGanteng']},
          {title: 'B', data: ['Bagus', 'Bamri', 'BakuGanteng']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

export default SectionListBasics