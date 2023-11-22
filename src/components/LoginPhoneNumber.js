import {Checkbox, Box} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function LoginPhoneNumber() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Welcome Back</Text>
      <Text>Login with your Phone Number</Text>
      <View style={styles.emailPhoneNumber}>
        <Text style={styles.email}>Email</Text>
        <Text style={styles.phoneNumber}>Phone Number</Text>
      </View>
      <TextInput style={styles.inputEmail} placeholder="Input your email" />
      <TextInput
        style={styles.inputPass}
        placeholder="Input your password"
        secureTextEntry
      />
      <View style={styles.recover}>
        <View style={styles.rememberMe}>
          <Checkbox isChecked colorScheme="green" value="" />
          <Text style={styles.text}>Remember Me</Text>
        </View>
        <Text style={styles.text}>Forgot Password</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.text}>Login</Text>
      </View>
      <Text>----Or continue with----</Text>
      <View style={styles.boxDirection}>
        <Box style={styles.box} />
        <Box style={styles.box} />
        <Box style={styles.box} />
      </View>
      <Text>
        Dont have an account?{' '}
        <Text style={styles.registerNOw}>Register now</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 130,
    backgroundColor: '#ffe6e6',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    gap: 15,
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
  email: {
    fontSize: 15,
    backgroundColor: '#00bfff',
    paddingHorizontal: 40,
    paddingVertical: 10,
    width: '50%',
  },
  phoneNumber: {
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: 'yellow',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  inputEmail: {
    backgroundColor: '#00bfff',
    fontWeight: 'bold',
    paddingHorizontal: 50,
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
  },
  inputPass: {
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

export default LoginPhoneNumber;
