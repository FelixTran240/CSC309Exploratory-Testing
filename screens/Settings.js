import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Switch,TextInput } from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs'; // Ensure BottomTabs is correctly implemented

const Settings = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('General');
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isPeanutAllergy, setIsPeanutAllergy] = useState(false);
  const [isDairyAllergy, setIsDairyAllergy] = useState(false);
  const [isGlutenAllergy, setIsGlutenAllergy] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  const handlePhotoChange = () => {
    // Implement photo change logic here
  };

  const handlePasswordChange = () => {
    // Implement password change logic here
  };  

  

  const renderContent = () => {
    switch (selectedTab) {
      case 'General':
        return (
          <View style={styles.preferencesContainer}>
            <Text style={[styles.contentText, { color: isDarkMode ? '#000' : '#000' }]}>General Settings</Text>
            <View style={styles.preferenceItem}>
              <Text style={[styles.preferenceText, { color: isDarkMode ? '#000' : '#000' }]}>Dark Mode</Text>
              <Switch
                value={isDarkMode}
                onValueChange={(value) => setIsDarkMode(value)}
              />
            </View>
          </View>
        );
        
      case 'Preferences':
        return (
          <View style={styles.preferencesContainer}>
            <View style={styles.preferenceItem}>
              <Text style={styles.preferenceText}>Vegan</Text>
              <Switch
                value={isVegan}
                onValueChange={(value) => setIsVegan(value)}
              />
            </View>
            <View style={styles.preferenceItem}>
              <Text style={styles.preferenceText}>Vegetarian</Text>
              <Switch
                value={isVegetarian}
                onValueChange={(value) => setIsVegetarian(value)}
              />
            </View>
            <Divider style={styles.divider} />
            <Text style={styles.sectionHeader}>Allergies</Text>
            <View style={styles.preferenceItem}>
              <Text style={styles.preferenceText}>Peanuts</Text>
              <Switch
                value={isPeanutAllergy}
                onValueChange={(value) => setIsPeanutAllergy(value)}
              />
            </View>
            <View style={styles.preferenceItem}>
              <Text style={styles.preferenceText}>Dairy</Text>
              <Switch
                value={isDairyAllergy}
                onValueChange={(value) => setIsDairyAllergy(value)}
              />
            </View>
            <View style={styles.preferenceItem}>
              <Text style={styles.preferenceText}>Gluten</Text>
              <Switch
                value={isGlutenAllergy}
                onValueChange={(value) => setIsGlutenAllergy(value)}
              />
            </View>
          </View>
        );
      case 'Account':
        return (
          <View style={styles.accountContainer}>
            <Text style={styles.contentText}>Account Settings</Text>
            <View style={styles.accountItem}>
              <Text style={styles.accountLabel}>Username</Text>
              <TextInput
                style={styles.accountInput}
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountLabel}>Photo</Text>
              <TouchableOpacity style={styles.photoButton} onPress={handlePhotoChange}>
                <Text style={styles.photoButtonText}>Change Photo</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountLabel}>Bio</Text>
              <TextInput
                style={styles.accountInput}
                value={bio}
                onChangeText={setBio}
                multiline
              />
            </View>
            <TouchableOpacity style={styles.passwordButton} onPress={handlePasswordChange}>
              <Text style={styles.passwordButtonText}>Change Password</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab('General')}>
            <Text style={styles.tabText}>General</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab('Preferences')}>
            <Text style={styles.tabText}>Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab} onPress={() => setSelectedTab('Account')}>
            <Text style={styles.tabText}>Account</Text>
          </TouchableOpacity>
        </View>
        <Divider orientation="vertical" width={1} />
        <View style={styles.content}>
          {renderContent()}
        </View>
      </View>
      <Divider width={1} />
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '27%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  tabText: {
    fontSize: 18,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  contentText: {
    fontSize: 18,
  },
  preferencesContainer: {
    padding: 20,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  preferenceText: {
    fontSize: 18,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  divider: {
    marginVertical: 20,
  },
  accountContainer: {
    padding: 20,
  },
  accountItem: {
    marginVertical: 10,
  },
  accountLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  accountInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  photoButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  passwordButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  passwordButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Settings;