import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
function Login(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button:{
    backgroundColor: colors.red,
    height:"6.5%",
    width:"96.3%",
    justifyContent:"center",
    borderRadius:30
  },
  buttonText:{
    color:colors.white,
    justifyContent:"center",
    textAlign:"center",
    fontWeight:"900",
    fontSize:25,
    textTransform:"uppercase"
  }
});
export default Login;