import React from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native';

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        {/* <Ionicons name={icon} size={24} color={color} /> */}
        <View>
          <Text>HI..!</Text>
        </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
});

export default IconButton;