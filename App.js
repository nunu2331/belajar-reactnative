import  React, {Component, version} from "react"
import {Platform, FlatList, StyleSheet, Text, View, TextInput, Image } from "react-native"

export default class App extends Component {
  render (){
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{ marginHorizontal: 17, flexDirection: "row"}} >
            <View style={{flex: 1 , position: "relative", marginTop: 13}}  >
              <TextInput placeholder= "Laper Bos?" style={{ fontSize: 13, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, paddingLeft: 40, paddingRight: 20, marginRight: 13}}></TextInput>
              <Image style={{ position: 'absolute', left: 12, top: 13}} source={require('./icon/search.png')}/>
            </View>
            <View style={{alignContent: "center", justifyContent: "center"}}>
              <Image style={{marginTop: 10, marginHorizontal: 3}} source={require('./icon/promo.png')}></Image>
            </View> 
          </View>
          <View>
            <View style={{backgroundColor: 'cornflowerblue', marginHorizontal: 17, flexDirection: "row", justifyContent: "space-between"}}>
              <Image style={{width:1600/16, height: 353/16}} resizeMode='contain' source={require('./icon/gopay.png')}></Image>
              <Text>Rp 100.000</Text>
            </View>
          </View>
        </View>
        <View style={{height: 60, backgroundColor: 'white', flexDirection: "row"}}>
          <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <View style={{width: 26, height: 26}}>
              <Image style={{width: 26, height: 26}} source={require('./icon/home.png')}></Image>
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Home</Text>
          </View>
          <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <View style={{width: 26, height: 26}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/order.png')}></Image>
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
          </View>
          <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <View style={{width: 26, height: 26}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/help.png')}></Image>
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
          </View>
          <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <View style={{width: 26, height: 26}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/inbox.png')}></Image>
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <View style={{width: 26, height: 26}}>
            <Image style={{width: 26, height: 26}} source={require('./icon/akun.png')}></Image>
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
          </View>
        </View>

      </View>
      )
  } 
}

