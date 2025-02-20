import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function ButtonsSignup({ navigation }) { 
  return (
    <View>
      <SignupForm navigation={navigation} />
    </View>
  )
}

const SignupForm = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = async () => {
    if (!username || !firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'All fields are required!')
      return
    }

    setIsLoading(true)

    try {
        const response = await axios.post('http://localhost:3000/api/users', {
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        password
      })

      console.log('Signup Success:', response.data)
      Alert.alert('Success', 'Account created successfully!')

      // Navigate to login screen after successful signup
      navigation.navigate('Login')

    } catch (error) {
      console.error('Signup Error:', error)
      const errorMessage = error.response?.data?.message || 'Signup failed. Please try again.'
      Alert.alert('Error', errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <Entypo name='user' size={24} style={styles.icon} />
        <TextInput 
          placeholder="Username" 
          value={username} 
          onChangeText={setUsername} 
          style={styles.input} 
        />
        {username.length > 0 && (
          <TouchableOpacity onPress={() => setUsername('')}>
            <Ionicons name="close-circle" size={24} style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Entypo name='user' size={24} style={styles.icon} />
        <TextInput 
          placeholder="First Name" 
          value={firstName} 
          onChangeText={setFirstName} 
          style={styles.input} 
        />
        {firstName.length > 0 && (
          <TouchableOpacity onPress={() => setFirstName('')}>
            <Ionicons name="close-circle" size={24} style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Entypo name='user' size={24} style={styles.icon} />
        <TextInput 
          placeholder="Last Name" 
          value={lastName} 
          onChangeText={setLastName} 
          style={styles.input} 
        />
        {lastName.length > 0 && (
          <TouchableOpacity onPress={() => setLastName('')}>
            <Ionicons name="close-circle" size={24} style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Entypo name='mail' size={24} style={styles.icon} />
        <TextInput 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
          style={styles.input} 
        />
        {email.length > 0 && (
          <TouchableOpacity onPress={() => setEmail('')}>
            <Ionicons name="close-circle" size={24} style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputContainer}>
        <Entypo name='lock' size={24} style={styles.icon} />
        <TextInput 
          placeholder="Password" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry={!showPassword} 
          style={styles.input} 
        />
        {password.length > 0 && (
          <TouchableOpacity onPress={() => setPassword('')}>
            <Ionicons name="close-circle" size={24} style={styles.clearIcon} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons 
            name={showPassword ? 'eye-off' : 'eye'} 
            size={24} 
            style={styles.eyeIcon} 
          />
        </TouchableOpacity>
      </View>

      <Button 
        title={isLoading ? 'Signing Up...' : 'Sign Up'}
        onPress={handleSignup}
        buttonStyle={styles.buttonStyle}
        disabled={isLoading}
      />
      <AlreadyHaveAnAccount navigation={navigation} />
    </View>
  )
}

const AlreadyHaveAnAccount = ({ navigation }) => (
  <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
    <Text>Already have an account? </Text>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.signUpText}>Sign In!</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 50,
    marginTop: 20,
    paddingHorizontal: 15,
    height: 50,
  },
  icon: {
    marginRight: 10,
    color: '#595b58',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  clearIcon: {
    color: '#595b58',
    marginRight: 10,
  },
  eyeIcon: {
    color: '#595b58',
  },
  buttonStyle: {
    backgroundColor: 'green',
    height: 50,
    borderRadius: 8,
    marginTop: 15
  },
  signUpText: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
})
