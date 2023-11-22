import {Checkbox, Box, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Micon from 'react-native-vector-icons/FontAwesome';

function Register() {
  return (
    <View style={styles.container} flex={1}>
      <Text style={styles.textBold}>Register</Text>
      <Text>Create your account</Text>
      <TextInput style={styles.inputName} placeholder="Input your name" />
      <TextInput style={styles.inputName} placeholder="Input your email" />
      <TextInput
        style={styles.inputName}
        placeholder="Input your phone number"
      />
      <TextInput style={styles.inputName} placeholder="Input your password" />
      <TextInput style={styles.inputName} placeholder="Confirm your password" />
      <View style={styles.recover}>
        <Micon name={'close'} />
        <View style={styles.rememberMe}>
          <Checkbox isChecked colorScheme="green" value="" />
          <Text style={styles.text}>Remember Me</Text>
        </View>
        <Text style={styles.text}>Forgot Password</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.text}>Sign Up</Text>
      </View>
      <Text>----Or continue with----</Text>
      <View style={styles.boxDirection}>
        <Box style={styles.box} />
        <Box style={styles.box} />
        <Box style={styles.box} />
      </View>
      <Text>
        Already have account? <Text style={styles.registerNOw}>Login now</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#ffe6e6',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: 'black',
    elevation: 0,
    paddingHorizontal: 30,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 20,
    top: 10,
  },
  emailPhoneNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    padding: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  text: {
    flexDirection: 'row',
    fontSize: 15,
  },

  inputName: {
    backgroundColor: '#00bfff',
    fontWeight: 'bold',
    paddingHorizontal: 40,
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
  },
  recover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  rememberMe: {
    flexDirection: 'row',
    gap: 10,
  },
  registerNOw: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: '#00bfff',
    paddingHorizontal: 40,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 10,
  },
  boxDirection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  box: {
    flexDirection: 'row',
    gap: 20,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});

export default Register;
