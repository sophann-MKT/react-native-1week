import React from 'react';
import LoginEmail from './src/components/LoginEmail';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPhoneNumber from './src/components/LoginPhoneNumber';
import Register from './src/components/Register';

const App = () => {
  const Stack = createNativeStackNavigator();
  const screens = [
    {name: 'LoginEmail', component: LoginEmail},
    {name: 'LoginPhoneNumber', component: LoginPhoneNumber},
    {name: 'Register', component: Register},
  ];
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="LoginEmail">
          {screens.map(screen => (
            <Stack.Screen
              key={screen.name}
              options={{headerShown: false}}
              name={screen.name}
              component={screen.component}
            />
          ))}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
