// components/LoginSignupScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import AuthButton from './AuthButton';

const LoginSignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic
  };

  const handleSignup = () => {
    // Implement signup logic
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
