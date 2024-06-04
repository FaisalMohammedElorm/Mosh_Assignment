import React from 'react';
import Constants from "expo-constants";
import { View } from 'react-native';
function Screen(props) {
  return (
    <View style={styles.container}>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    
  }
});
export default Screen;