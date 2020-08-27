import  React, {Component, version} from "react"
import {Platform, FlatList, StyleSheet, Text, View, TextInput, Image } from "react-native"

export default class App extends Component {
  render (){
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{ marginHorizontal: 10, flexDirection: "row"}} >
            <View style={{position: "relative", marginTop: 13}}  >
              <TextInput placeholder= "Laper Bos?" style={{ fontSize: 13, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, paddingLeft: 40, paddingRight: 25}}></TextInput>
              <Image style={{ position: 'absolute',top: 14, left: 12}} source={require('./icon/search.png')}/>
            </View>
            <View>
              <Image source={require('./icon/promo.png')}></Image>
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

