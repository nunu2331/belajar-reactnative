import  React, {useState} from "react"
import { Button, Text, View } from "react-native"

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true)

  return (
    <View>
      <Text>
        Aku {props.name}, dan Aku {isHungry ? "hungry" : "full"} !
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false)
        }}
        disabled={!isHungry}
        title={isHungry? "Beri aku susu, tolong!" : "Makasih gannnnn!"}
      />
    </View>
  )
}

const Cafe = () => {
  return (
    <>
      <Cat name="Munkustrap"/>
      <Cat name="Munku"/>
    </>
  )
}
export default Cafe 