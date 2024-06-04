import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../config/colors';
function Register(props) {
  return (
    <View>
      <TouchableOpacity style={styles.register}>
        <Text style={styles.registerText}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  register:{
    backgroundColor: colors.green,
    padding: 10,
    justifyContent:"flex-end",
    marginTop:27,
    width: 412,
    borderRadius:29,
    height:55,

  },
  registerText:{
    color: colors.white,
    fontWeight:"900",
    textAlign:"center",
    fontSize:25,
    textTransform:"uppercase"
  }
});
export default Register;