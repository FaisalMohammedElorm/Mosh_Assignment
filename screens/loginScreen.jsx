import { View, Text , StyleSheet, ImageBackground, Image} from 'react-native'
import React from 'react'
import Login from './components/Login';
import Register from './components/Register';
const loginScreen = () => {
  return (
    <ImageBackground 
    style={styles.background} 
    source={require("./assets/background.jpg")}>
    <View style={styles.container}>
    {/** LOGO IMAGE */}
    <View style={styles.logoContainer}>
    <Image source={require("./assets/logo-red.png")} style={styles.logo}/>
   
    </View>
    <View style={{marginBottom:550}}>
    <Text style={styles.tagline}>Sell What You Don't Need</Text>
    </View>
    

   
    {/** LOGIN BUTTON */}
      <Login/>
      {/** REGISTER BUTTON */}
      <Register/>
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom:40,
    
  },
  background:{
    height:"100%",
    width:"100%",
    resizeMode:"contain"
  },
  logo:{
    width: 100,
    height:100,
    marginBottom:570,
  },
  tagline:{
    fontSize: 25,
    fontWeight:"bold",
    
    
  },
  logoContainer:{
    alignItems: "center",
    position:"absolute",
    top: 50,
    width:"100%"

  }
});
export default loginScreen