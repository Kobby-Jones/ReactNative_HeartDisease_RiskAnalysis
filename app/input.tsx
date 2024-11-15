
// Import necessary dependencies
import { useEffect, useState } from 'react';
import { Text, TextInput, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Navbar from './navbar';
import { score } from './model_funtion';
import { isAuthenticated } from './auth'

// Define the InputData component
export default function InputData() {
  // Initialize router hook
  const router = useRouter();

useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isAuthenticated();
      if (!loggedIn) {
        alert("Please log in to access this page.");
        router.push('/login'); // Redirect to home/login page
      }
    };
    checkAuth();
  }, []);
  // Initialize form state with empty values
  const [form, setForm] = useState({
    age: '',
    sex: '',
    cigsPerDay: '',
    totChol: '', 
    sysBP: '',
    glucose: '',
  });

  // Handle input changes for form fields
  const handleInputChange = (field: string, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate for empty fields
    if (Object.values(form).some(value => value === '')) {
      alert('Please fill out all required fields.');
      return;
    }

    // Convert form values to numbers for prediction
    const inputFeatures = [
      Number(form.age),
      Number(form.sex),
      Number(form.cigsPerDay),
      Number(form.totChol),
      Number(form.sysBP), 
      Number(form.glucose)
    ];

    // Calculate prediction score and probability
    const predictionScore = score(inputFeatures);
    const probability = 1 / (1 + Math.exp(-predictionScore));

    // Navigate to results screen with probability
    router.push({
      pathname: '/results',
      params: { probability: probability.toFixed(2) }
    });
  };

  return (
      <LinearGradient colors={['#ef8e38', '#0099f7']} style={styles.gradientContainer}>
      <SafeAreaView style={styles.container}>
        <Navbar />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.header}>Input Data for Heart Disease Prediction</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Age*"
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('age', text)}
            value={form.age}
          />

          <Picker
            selectedValue={form.sex}
            onValueChange={(value) => handleInputChange('sex', value)}
            style={styles.input}
          >
            <Picker.Item label="Sex*" value="" />
            <Picker.Item label="Male" value="1" />
            <Picker.Item label="Female" value="0" />
          </Picker>

          <TextInput
            style={styles.input}
            placeholder="Cigarettes Per Day*" 
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('cigsPerDay', text)}
            value={form.cigsPerDay}
          />

          <TextInput
            style={styles.input}
            placeholder="Total Cholesterol (mg/dl)*"
            keyboardType="numeric" 
            onChangeText={(text) => handleInputChange('totChol', text)}
            value={form.totChol}
          />

          <TextInput
            style={styles.input}
            placeholder="Systolic Blood Pressure (mmHg)*"
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('sysBP', text)} 
            value={form.sysBP}
          />

          <TextInput
            style={styles.input}
            placeholder="Glucose Level (mg/dl)*"
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange('glucose', text)}
            value={form.glucose}
          />

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Predict</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 70,
  },
  scrollViewContent: {
    padding: 10,
    marginTop: 50,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d3557',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#841584',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


