import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, ScrollView } from "react-native";
import * as Progress from "react-native-progress";
import axios from "axios";
import { LoginId } from "../LoginDetails/Buttons";

export default function ProgressBar() {
  const [currentCalories, setCurrentCalories] = useState(0);
  const [caloriesLimit, setCaloriesLimit] = useState(2000); // Default calorie limit
  const [foodItems, setFoodItems] = useState([]); // State to store item names
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  useEffect(() => {
    // Fetch the calories data as soon as the component mounts
    const fetchCaloriesData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/tracker/spec/DaU/2025-02-18/${LoginId}`);
        
        // Extract calorie count
        const totalCalories = response.data.data.reduce((acc, item) => acc + item.calories, 0);
        setCurrentCalories(totalCalories);

        // Extract food item names
        const itemNames = response.data.data.map(item => item.item_name);
        setFoodItems(itemNames);

        console.log('Total Calories:', totalCalories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCaloriesData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Calorie Limit Input */}
      <Text style={styles.label}>Set Your Calorie Limit:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter calorie limit"
        value={caloriesLimit.toString()}
        onChangeText={(text) => {
          const newLimit = parseInt(text) || 0; // Ensure it's a number
          setCaloriesLimit(newLimit);
        }}
      />

      {/* Progress Circle */}
      <Progress.Circle
        style={{ marginTop: 20 }}
        progress={currentCalories / Math.max(1, caloriesLimit)} // Prevent division by zero
        size={300}
        color={"#1fd324"}
        unfilledColor={"#f0f0f0"}
        borderWidth={1}
        borderColor={"#ccc"}
        thickness={10}
        showsText={true}
        formatText={() => `${currentCalories} / ${caloriesLimit} calories`}
        textStyle={styles.progressText}
      />

      {/* Show Items Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Show Items</Text>
      </TouchableOpacity>

      {/* Modal for Food Items */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Food Items</Text>
            <ScrollView style={styles.itemsList}>
              {foodItems.length > 0 ? (
                foodItems.map((item, index) => (
                  <Text key={index} style={styles.itemText}>• {item}</Text>
                ))
              ) : (
                <Text style={styles.itemText}>No items found.</Text>
              )}
            </ScrollView>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 18,
    marginBottom: 20,
  },
  progressText: {
    fontSize: 20,
    color: "black",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  itemsList: {
    maxHeight: 200, // Limit height and enable scrolling
    width: "100%",
  },
  itemText: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 2,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});

