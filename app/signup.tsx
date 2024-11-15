    // Import required dependencies from expo and react-native
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as SecureStore from 'expo-secure-store'
import { ToastAndroid, Platform } from 'react-native';

// Initialize router for navigation
const router = useRouter()

// SignUp component for user registration
const SignUp = () => {
  // State to store user email and password
  const [userData,setUserData] = useState({
    email: '',
    password: '',
  })

  // Function to show toast messages on Android and alert on other platforms
  const showToast = (message: string) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      alert(message);
    }
  }

  // Function to securely store user credentials and navigate to login
  const saveCredentials = async (email: any, password: any) => {
    try {
      await SecureStore.setItemAsync('username', email);
      await SecureStore.setItemAsync('password', password);
      showToast("Registration successful!");
      router.push('/login')
    } catch (error) {
      console.error("Error saving credentials:", error);
    }
  };

  // Handler for input field changes
  const handleInputChange = (field: string, value: string) => {
    setUserData({ ...userData, [field]: value });
  };

  // Navigate to login screen
  const onPressLogin = () => {
    router.push('/login')
  };

  // Handle sign up button press
  const onPressSignUp = () => {
    if (!userData.email || !userData.password) {
      showToast("Please fill in all fields.");
      return;
    }
    saveCredentials(userData.email, userData.password);
  };

  return (
    // Main container with gradient background
    <LinearGradient colors={['#ef8e38', '#0099f7']} style={styles.uiGradient}>
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Sign Up</Text>
        
        {/* Email input field */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => handleInputChange('email', text)}/>
        </View>
        
        {/* Password input field */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => handleInputChange('password', text)}/>
        </View>
        
        {/* Sign up button */}
        <TouchableOpacity
          onPress={onPressSignUp}
          style={styles.loginBtn}>
          <Text>SIGN UP</Text>
        </TouchableOpacity>
        
        {/* Login link */}
        <TouchableOpacity
          onPress={onPressLogin}>
          <Text style={styles.forgotAndSignUpText}>Already have an acccount? Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  uiGradient:{
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight: "bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom: 40,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#3AB4BA",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgotAndSignUpText:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});

export default SignUp;   