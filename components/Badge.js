import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Badge = ({ count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2089DC', // Background color of the badge
    borderRadius: 10, // Adjust this value to change the badge's roundness
    minWidth: 30, // Minimum width of the badge
    padding: 5, // Padding around the badge content
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    position: 'relative',
    left: 5
  },
  text: {
    color: 'white', // Color of the text inside the badge
    fontSize: 12, // Font size of the text inside the badge
    fontWeight: 'bold', // Font weight of the text inside the badge
  },
});

export default Badge;
