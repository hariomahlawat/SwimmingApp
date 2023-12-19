import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Alert } from 'react-native';
import AuthButton from './AuthButton';
import { signIn,signUp } from '../AuthService'; // Import signIn from AuthService

const LoginSignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await signIn(email, password);
      // Navigate to user's dashboard or home screen
      // Example: navigation.navigate('UserDashboard');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  const handleSignup = () => {
    // Navigate to SignupScreen for user registration
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/adaptive-icon.png')} // Update with your image path
        style={styles.image}
      />
      <Text style={styles.tagline}>Dive into Success with ConnectNow</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <AuthButton title="Login" onPress={handleLogin} />
      <AuthButton title="Signup" onPress={handleSignup} />
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  tagline: {
    fontSize: 18,
    fontStyle: 'italic',
    marginVertical: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});

export default LoginSignupScreen;
