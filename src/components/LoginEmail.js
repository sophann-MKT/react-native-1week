import {Checkbox, Box} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function LoginEmail({navigation}) {
  const [inputText, seInputText] = useState('email');
  const handleInputChange = change => {
    seInputText(change);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Welcome Back</Text>
      <Text>Login with your Email</Text>
      <View style={styles.emailPhoneNumber}>
        <Text
          style={
            (styles.email,
            inputText === 'email' ? styles.email : styles.phoneNumber)
          }
          onPress={() => handleInputChange('email')}>
          Email
        </Text>
        <Text
          style={
            (styles.phoneNumber,
            inputText === 'phone' ? styles.email : styles.phoneNumber)
          }
          onPress={() => handleInputChange('phone')}>
          Phone Number
        </Text>
      </View>
      <View style={styles.inputNameSection}>
        <Icon
          style={styles.userIcon}
          name={inputText === 'email' ? 'envelope' : 'phone'}
          size={20}
          color="#000"
        />
        <TextInput
          style={styles.input}
          placeholder={
            inputText === 'email'
              ? 'Input your email'
              : 'Input your phone number'
          }
        />
      </View>
      <View style={styles.inputNameSection}>
        <Icon style={styles.userIcon} name="lock" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Input your password"
          secureTextEntry
        />
        <View>
          <Icon
            style={styles.eyeSlash}
            name="eye-slash"
            size={20}
            color="#000"
          />
        </View>
      </View>
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
      <View style={styles.continueLine}>
        <View style={styles.line} />
        <Text>Or continue with</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.boxDirection}>
        <Box style={styles.box} />
        <Box style={styles.box} />
        <Box style={styles.box} />
      </View>
      <Text>
        Dont have an account?{' '}
        <Text
          style={styles.registerNow}
          onPress={() => navigation.navigate('Register')}>
          Register now
        </Text>
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
  email: {
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: 'yellow',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  phoneNumber: {
    fontSize: 15,
    backgroundColor: '#00bfff',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
  inputNameSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#00bfff',
  },
  userIcon: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#00bfff',
  },
  input: {
    flex: 1,
    backgroundColor: '#00bfff',
    padding: 15,
    borderRadius: 10,
  },
  eyeSlash: {
    padding: 15,
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
  text: {
    flexDirection: 'row',
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
  continueLine: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  line: {
    flex: 1,
    borderWidth: 0.3,
    opacity: 0.5,
    alignItems: 'center',
    borderColor: '#000000',
    width: '100%',
    height: 1,
  },
  boxDirection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  box: {
    flexDirection: 'row',
    gap: 20,
    borderColor: '#000000',
    borderWidth: 0.5,
    opacity: 0.5,
    shadowColor: '#000000',
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  registerNow: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default LoginEmail;
