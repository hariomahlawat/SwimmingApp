import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginSignupScreen from './components/LoginSignupScreen';
import SignupScreen from './components/SignupScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginSignupScreen">
        <Stack.Screen 
          name="LoginSignupScreen" 
          component={LoginSignupScreen} 
          options={{ title: 'Welcome' }} 
        />
        <Stack.Screen 
          name="SignupScreen" 
          component={SignupScreen} 
          options={{ title: 'Sign Up' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
