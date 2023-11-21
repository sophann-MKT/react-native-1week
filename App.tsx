import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaBg}>
      <View style={styles.container}>
        <Text style={styles.textBold}>Welcome Back</Text>
        <Text>Login with your account</Text>
        <View style={styles.emailPassRow}>
          <Text style={styles.email}>Email</Text>
          <Text style={styles.password}>Phone Number</Text>
        </View>
        <TextInput style={styles.inputEmail} placeholder="Enter your email" />
        <TextInput
          style={styles.inputPass}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaBg: {
    backgroundColor: '#00bfff',
  },
  container: {
    marginTop: 150,
    backgroundColor: '#808080	',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: 'black',
    elevation: 0,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  emailPassRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  text: {
    flexDirection: 'row',
    fontSize: 15,
  },
  email: {
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: 'yellow',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  password: {
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: 'cyan',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  inputEmail: {
    backgroundColor: 'yellow',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  inputPass: {
    backgroundColor: 'yellow',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
});

export default App;
