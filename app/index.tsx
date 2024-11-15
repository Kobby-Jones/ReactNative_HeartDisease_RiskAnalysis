import { Text, View, StyleSheet, SafeAreaView, Image, Button, TouchableOpacity } from "react-native";
import { Card} from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
const BackgroundImage = require('../assets/images/heart.png') 
import { useRouter } from "expo-router";
import Navbar from './navbar'

const router = useRouter()

export default function Index() {
  return (
    <LinearGradient colors={['#ef8e38', '#0099f7']} style={styles.uiGradient}>
      <SafeAreaView style={styles.container}>
        	<Navbar />
        <View style={styles.view}>
        <Card >
        <Card.Cover style={styles.image} source={BackgroundImage} />
        <Card.Content style={styles.content}>
          <Text style={styles.text}>
          Welcome To Heart Disease Prediction Portal
          </Text>
          <Button onPress={()=> router.push('/input')}
          
  title="Start Prediction"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
        </Card.Content>
       </Card>
        </View>
      </SafeAreaView>
      </LinearGradient>
      
  );
}

const styles = StyleSheet.create({
  uiGradient:{
    flex: 1
  },
  container:{
    flex: 1,
    paddingTop: 70,
    
  },
  title: {
    marginLeft: 50
  },
  heaher:{
    paddingLeft: 30,
    paddingRight: 20
  },
  icons:{
    margin: 5
  },
  view: {
    flex: 1,
    // marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center', // Center horizontally
  },
content:{
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f46b45'
},
image:{
  height: 250,
  width: '100%'
},
text:{
  fontSize:30,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#28a745',

},
card: {
  margin: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
},
background: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height: 300,
},
  
})