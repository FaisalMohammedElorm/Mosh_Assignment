import React from 'react';
import { View , Text, StyleSheet, Image} from 'react-native';

function Card({image, title, subTitle}) {
  return (
    <View style={styles.card}>
    <Image style={styles.image} source={image}/>
    <View style={styles.detailsContainer}>

    <Text style={styles.cardText}>{title}</Text>
    <Text style={styles.cardText}>{subTitle}</Text>
    </View>

    </View>
  );
}
const styles = StyleSheet.create({
  card:{
    borderRadius:15,
    backgroundColor: '#fff',
    marginBottom:20,
    overflow: 'hidden',


  },
  cardText:{
    fontSize:25,
  }, 
  image:{
    width:"100%",
    height:200,
  }
});
export default Card;