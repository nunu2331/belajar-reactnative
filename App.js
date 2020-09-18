import  React, {Component, version} from "react"
import {Platform, FlatList, StyleSheet, Text, View, TextInput, Image, ScrollView } from "react-native"

export default class App extends Component {
  render (){
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{ marginHorizontal: 17, flexDirection: "row"}} >
            <View style={{flex: 1 , position: "relative", marginTop: 13}}  >
              <TextInput placeholder= "Laper Bos?" style={{ fontSize: 13, borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, paddingLeft: 40, paddingRight: 20, marginRight: 13}}></TextInput>
              <Image style={{ position: 'absolute', left: 12, top: 13}} source={require('./icon/search.png')}/>
            </View>
            <View style={{alignContent: "center", justifyContent: "center"}}>
              <Image style={{marginTop: 10, marginHorizontal: 3}} source={require('./icon/promo.png')}></Image>
            </View> 
          </View>
          <View style={{marginHorizontal: 17, marginTop: 13}}>
            <View style={{backgroundColor: '#2c5fb8', paddingHorizontal: 17, flexDirection: "row", justifyContent: "space-between", borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14}}>
              <Image style={{width:1600/20, height: 353/20}} resizeMode='contain' source={require('./icon/goopay.png')}></Image>
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>Rp 100.000</Text>
            </View>
            <View style={{flexDirection: "row", paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
              <View style={{flex: 1, alignItems: "center"}}>
                <Image style={{backgroundColor: 'white', width: 35, height: 35}} source={require('./icon/pay.png')}></Image>
                <Text style={{color: 'white', fontSize: 13, fontWeight: "bold", marginTop: 5}}>Pay</Text>
              </View>
              <View style={{flex: 1, alignItems: "center"}}>
                <Image style={{backgroundColor: 'white', width: 35, height: 35}} source={require('./icon/nearby.png')}></Image>
                <Text style={{color: 'white', fontSize: 13, fontWeight: "bold", marginTop: 5}}>Nearby</Text>
              </View>
              <View style={{flex: 1, alignItems: "center"}}>
                <Image style={{backgroundColor: 'white', width: 35, height: 35}} source={require('./icon/topup.png')}></Image>
                <Text style={{color: 'white', fontSize: 13, fontWeight: "bold", marginTop: 5}}>TopUp</Text>
              </View>
              <View style={{flex: 1, alignItems: "center"}}>
                <Image style={{backgroundColor: 'white', width: 35, height: 35}} source={require('./icon/menu.png')}></Image>
                <Text style={{color: 'white', fontSize: 13, fontWeight: "bold", marginTop: 5}}>More</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: "row", flexWrap: "wrap", marginHorizontal: 0, marginTop: 18}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: '100%', marginBottom: 18 }}>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: "center", alignItems: "center"}}>
                  <Image style={{width: 34, height: 34}} source={require('./icon/goride.png')}></Image>  
                </View>
                <Text style={{fontSize: 11, fontWeight: "bold", textAlign: "center", marginTop: 6}}>GO-RIDE</Text>
              </View>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: "center", alignItems: "center"}}>
                  <Image style={{width: 34, height: 34}} source={require('./icon/gocar.png')}></Image>  
                </View>
                <Text style={{fontSize: 11, fontWeight: "bold", textAlign: "center", marginTop: 6}}>GO-CAR</Text>
              </View>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: "center", alignItems: "center"}}>
                  <Image style={{width: 34, height: 34}} source={require('./icon/gotaxi.png')}></Image>  
                </View>
                <Text style={{fontSize: 11, fontWeight: "bold", textAlign: "center", marginTop: 6}}>GO-TAXI</Text>
              </View>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: "center", alignItems: "center"}}>
                  <Image style={{width: 34, height: 34}} source={require('./icon/gosend.png')}></Image>  
                </View>
                <Text style={{fontSize: 11, fontWeight: "bold", textAlign: "center", marginTop: 6}}>GO-SEND</Text>
              </View>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: '100%' }}>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: "center", alignItems: "center"}}>
                  <Image style={{width: 34, height: 34}} source={require('./icon/godeals.png')}></Image>  
                </View>
                <Text style={{fontSize: 11, fontWeight: "bold", textAlign: "center", marginTop: 6}}>GO-DEALS</Text>
              </View>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: "center", alignItems: "center"}}>
                  <Image style={{width: 34, height: 34}} source={require('./icon/gopulsa.png')}></Image>  
                </View>
                <Text style={{fontSize: 11, fontWeight: "bold", textAlign: "center", marginTop: 6}}>GO-PULSA</Text>
              </View>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: "center", alignItems: "center"}}>
                  <Image style={{width: 34, height: 34}} source={require('./icon/gofood.png')}></Image>  
                </View>
                <Text style={{fontSize: 11, fontWeight: "bold", textAlign: "center", marginTop: 6}}>GO-FOOD</Text>
              </View>
              <View style={{width:'25%', alignItems: 'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: "center", alignItems: "center"}}>
                  <Image style={{width: 34, height: 34}} source={require('./icon/more.png')}></Image>  
                </View>
                <Text style={{fontSize: 11, fontWeight: "bold", textAlign: "center", marginTop: 6}}>MORE</Text>
              </View>
            </View>
          </View>
          <View style={{height: 18, backgroundColor:'#F2F2F4', marginTop: 20}}></View>
          <View style={{paddingTop: 16, paddingHorizontal: 17}}>
            <View>
              <Image source={require('./dummy/hoggwarts.jpg')} style={{height: 170, width:'100%', borderRadius: 6}}/>
            </View>
            <View>
              <Text>GO-KORAN</Text>
              <Text>Kastel Howgwarts dilelang, Pertarungan apa yang akan terjadi?</Text>
            </View>
          </View>
        </ScrollView>
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

