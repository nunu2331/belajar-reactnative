import  React from 'react'
import { Text } from 'react-native'

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + "" + secondName + "" + thirdName
}

const cat = () => {
  return (
    <Text>
      Halo, Aku {getFullName("Rum", "Tum", "Tugger")}
    </Text>
  )
}
export default cat 