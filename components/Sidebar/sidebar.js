import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SideBar = ({ mainContent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const translateX = useState(new Animated.Value(-250))[0];

  const toggleSidebar = () => {
    Animated.timing(translateX, {
      toValue: isOpen ? -250 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
        <Animated.View style={[styles.sidebarContainer, { transform: [{ translateX }] }]}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
              <Text style={styles.closeButtonText}>x</Text>
            </TouchableOpacity>
            <View style={styles.sidebarContent}>
              <TouchableOpacity onPress={() => alert('Naviate to Home')}>
                <Text style={styles.link}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Naviate to Login')}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Naviate to Settings')}>
                <Text style={styles.link}>Setings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Naviate to Addressability')}>
                <Text style={styles.link}>Addressability</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <TouchableOpacity style={styles.toggleButton} onPress={toggleSidebar}>
            <Icon name="menu" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.maintext}>Main Content</Text>
        </View>
    </View>
    )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sidebarContainer: {
    position: 'absolute',
    top: 0,
    left: -250,
    width: 250,
    height: '100%',
    backgroundColor: '#333',
    zIndex: 10,
    padding: 20,
    transition: 'left 0.3s ease',
  },
  sidebarContainerOpen: {
    left: 0, // Sidebar slides into view
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
  },
  sidebarContent: {
    marginTop: 50,
  },
  link: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleButton: {
    position: 'absolute',
    top: -5,
    left: 0,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 24,
  },
  mainText: {
    fontSize: 20,
  },
});

export default SideBar;
