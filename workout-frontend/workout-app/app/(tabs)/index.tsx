import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function HomeScreen() {

  const workouts = ["Push", "Pull", "Legs"];

  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  const handlePress = (type: string) => {
    Alert.alert(`You selected ${type} day!`);
    setSelectedWorkout(type);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>DATE</Text>
        <Text style={styles.subtitle}>welcome back</Text>
      </View>
    
      <View style={styles.buttonRow}>
        {/*Map over workouts*/}
        {workouts.map((type) => (
          <TouchableOpacity 
            key={type}
            onPress={() => handlePress(type)}
            style={styles.button}>
            <Text style={styles.buttonText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Fill the whole screen
    justifyContent: "center",
    alignItems: "center",     // Center horizontally
    backgroundColor: "#f5f5f5" // Light gray background
  },
  header: {
    alignItems: "center",
    //marginBottom: 30
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20
  },
  button: {
    borderRadius: 10,
    backgroundColor: "#007bff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "55%"
  }
});