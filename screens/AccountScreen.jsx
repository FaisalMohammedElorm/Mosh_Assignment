import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MoshData } from '../mock/MoshData';
import Constants from "expo-constants";

const AccountScreen = () => {
  return (
    <View style={styles.entireScreen}>
      <View>
        <FlatList
          data ={MoshData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
          
            <View style={styles.dataContainer}>
            <View>
              <Image  style={styles.image} source={item.image}/>
            </View>
            <View>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <View>
               <Text>{item.subtitle}</Text>
            </View>
            
            </View>
          )}
          
        />
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
 dataContainer:{
  flexDirection:'row',
  
 },
 image:{
  height:70,
  width:75,
  borderRadius:30,
 },
 entireScreen:{
  paddingTop:Constants.statusBarHeight
 },
 titleText:{
  fontSize:20,

 }
});

export default AccountScreen
            

