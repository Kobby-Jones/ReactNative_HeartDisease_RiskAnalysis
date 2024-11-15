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




const router = useRouter()

const Login =  () => {
const [userData,setUserData] = useState({
    email: '',
    password: '',
    })

    const validateCredentials = async (email: any, password: any) => {
        try {
            const storedEmail = await SecureStore.getItemAsync('username');
            const storedPassword = await SecureStore.getItemAsync('password');
            if (email === storedEmail && password === storedPassword) {
                // Store the login status in SecureStore
                // This is to ensure that the ser is logged in before being able to make predictions
                await SecureStore.setItemAsync('isLoggedIn', 'true');
                alert("Login successful!");
                router.push('/')
            } else {
                alert("Invalid credentials. Please try again.");
            }
        } catch (error) {
            console.error("Error validating credentials:", error);
        }
    };

const handleInputChange = (field: string, value: string) => {
    setUserData({ ...userData, [field]: value });
  };

  const onPressLogin = () => {
    if (!userData.email || !userData.password) {
      alert("Please fill in all fields.");
      return;
    }
    validateCredentials(userData.email, userData.password);
    };
const onPressForgotPassword = () => {
// Do something about forgot password operation
};
const onPressSignUp = () => {
router.push('/signup')
};

return (
<LinearGradient colors={['#ef8e38', '#0099f7']} style={styles.uiGradient}>
<View style={styles.container}>
<Text style={styles.title}> Login </Text>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
placeholder="Email"
placeholderTextColor="#003f5c"
onChangeText={text => handleInputChange('email', text)}/>
</View>
<View style={styles.inputView}>
<TextInput
style={styles.inputText}
secureTextEntry
placeholder="Password"
placeholderTextColor="#003f5c"
onChangeText={text => handleInputChange('password', text)}/>
</View>
<TouchableOpacity
onPress = {onPressForgotPassword}>
<Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressLogin}
style={styles.loginBtn}>
<Text >LOGIN </Text>
</TouchableOpacity>
<TouchableOpacity
onPress = {onPressSignUp}>
<Text style={styles.forgotAndSignUpText}>Signup</Text>
</TouchableOpacity>
</View>
    </LinearGradient>

);
}
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
fontSize:16
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
export default Login;