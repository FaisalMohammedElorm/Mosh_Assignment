import React from 'react';
import { View, StyleSheet , Image} from 'react-native'
function ListItem({id, title, subTitle, image}) {
  return (
    <View style={styles.container}>
    <View style={styles.titleText}>{title}</View>
    <View style={styles.subTitleText}>{subTitle}</View>
    <Image style={styles.image} source={image}/>
    </View>
  );
}
const styles = StyleSheet.create({
  titleText:{


  },
  subTitleText:{

  },
  image:{

  }
});
export default ListItem;