import * as SecureStore  from 'expo-secure-store';
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import { isAuthenticated } from "./auth";

const router = useRouter()
export default function Navbar(){

  /**
 * Navbar component that provides navigation functionality for the application
 * Contains three navigation buttons: Home, Make Prediction, and Login/Logout
 * Uses expo-router for navigation between screens
 * Handles authentication state through SecureStore
 * The Login/Logout button dynamically changes based on authentication status
 * Styled with a blue background and white text
 */    

    const handleAuthAction = async () => {
        const isLoggedIn = await isAuthenticated();
        if (isLoggedIn) {
          await SecureStore.setItemAsync('isLoggedIn', 'false');
          console.log(isLoggedIn)
          router.push('/login');
        } else {
          router.push('/login');
        }
      };

  
    return(
        <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/')}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/input')}>
        <Text style={styles.navText}>Make Prediction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => 
        
        {handleAuthAction()}
        }>
        <Text style={styles.navText}>
          Login
        </Text>                   
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => 
        router.push('/imagepicker')
        
        }>
        <Text style={styles.navText}>
          Image Detect
        </Text>                   
      </TouchableOpacity>
    </View>

    );
}


const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 60,
      backgroundColor: '#0099f7',
    },
    navItem: {
      padding: 10,
    },
    navText: {
      color: '#fff',
      fontSize: 18,
    },
  });
