import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginSignupScreen from './components/LoginSignupScreen';
import SignupScreen from './components/SignupScreen';
import CoachDashboard from './components/CoachDashboard';
import SwimmerDashboard from './components/SwimmerDashboard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CoachTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Dashboard" 
        component={CoachDashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
      {/* Add other tabs for the Coach's dashboard here */}
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CoachDashboard">
        <Stack.Screen 
          name="LoginSignupScreen" 
          component={LoginSignupScreen} 
          options={{ title: 'Connect Now' }} 
        />
        <Stack.Screen 
          name="SignupScreen" 
          component={SignupScreen} 
          options={{ title: 'Sign Up' }} 
        />
        {/* Consider conditionally rendering these screens based on user role */}
        <Stack.Screen 
          name="CoachDashboard" 
          component={CoachTabNavigator} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SwimmerDashboard" 
          component={SwimmerDashboard} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




















// // Define the Coach's Tab Navigator
// function CoachTabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Dashboard" component={CoachDashboard} />
//       {/* Add other screens and set icons for each tab here */}
//     </Tab.Navigator>
//   );
// }

// // Define the Main Stack Navigator
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* Initially show the LoginSignupScreen */}
//         <Stack.Screen 
//           name="LoginSignupScreen" 
//           component={LoginSignupScreen} 
//           options={{ title: 'Connect Now' }} 
//         />
//         <Stack.Screen 
//           name="SignupScreen" 
//           component={SignupScreen} 
//           options={{ title: 'Sign Up' }} 
//         />
//         {/* The Coach's dashboard with the bottom tabs becomes accessible after login/signup */}
//         <Stack.Screen 
//           name="CoachDashboard" 
//           component={CoachTabNavigator} 
//           options={{ headerShown: false }} // Optionally hide the header
//         />
//         {/* If you have additional screens for the tabs, define them here */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
