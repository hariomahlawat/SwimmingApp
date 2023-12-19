import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import AuthButton from './AuthButton';
import { signUp } from '../AuthService';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('Swimmer'); // Swimmer or Coach

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      await signUp(email, password, name, phone, userType);
      navigation.navigate('LoginScreen');
    } catch (error) {
      alert(error.message);
    }
  };

  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Create Your Account</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPhone}
            value={phone}
            placeholder="Phone"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </View>
  
        <View style={styles.userTypeContainer}>
          <TouchableOpacity onPress={() => setUserType('Swimmer')} style={userType === 'Swimmer' ? styles.userTypeSelected : styles.userType}>
            <Text>Swimmer</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setUserType('Coach')} style={userType === 'Coach' ? styles.userTypeSelected : styles.userType}>
            <Text>Coach</Text>
          </TouchableOpacity>
        </View>
  
        <AuthButton title="Sign Up" onPress={handleSignup} />
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    inputContainer: {
      marginBottom: 20,
    },
    input: {
      height: 50,
      marginVertical: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
    },
    userTypeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
    },
    userType: {
      borderWidth: 1,
      borderColor: '#007bff',
      borderRadius: 5,
      padding: 10,
    },
    userTypeSelected: {
      borderWidth: 1,
      borderColor: '#007bff',
      backgroundColor: '#007bff',
      borderRadius: 5,
      padding: 10,
    },
  });
  
  export default SignupScreen;
  
