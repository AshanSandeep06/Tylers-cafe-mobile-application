import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const theme = {
    bg: opacity => `rgba(249, 115, 22, ${opacity})`,
    text: '#f97316'
  };

  return (
    <View style={{ flex: 1 }}>
      {/* background image */}
      <ImageBackground
        source={require('../assets/img-2.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.topic}>
          <Text style={styles.header}>Welcome</Text>
          <Text style={styles.header}>To Tyler's Cafe</Text>
          <Text style={styles.text}>Where Every Flavor Finds Its Home!</Text>
        </View>
      </ImageBackground>

      {/* content & gradient */}
      <View style={styles.contentContainer}>
        <LinearGradient
          colors={['transparent', 'rgba(3,105,161,0.5)']}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />

        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} style={[styles.button, { backgroundColor: theme.bg(1) }]}>
          <Text style={styles.buttonText}>Let's go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'flex-end',
    height: height // Set the height to the full height of the screen
  },
  topic: {
    marginBottom: 250,
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 46,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-Regular', // This is the name you'll use to refer to your font
    fontWeight: 'normal', // You can also specify 'bold' for fontWeight
  },
  contentContainer: {
    position: 'relative',
    padding: 20,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
  },
  button: {
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 125,
    marginBottom: 13
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Welcome;
