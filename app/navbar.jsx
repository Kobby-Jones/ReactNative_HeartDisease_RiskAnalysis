import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";

const router = useRouter()

export default function Navbar(){
    return(
        <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/')}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/input')}>
        <Text style={styles.navText}>Make Prediction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/login')}>
        <Text style={styles.navText}>Login</Text>
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
