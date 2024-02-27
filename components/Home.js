import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import AddToCartScreen from '../screens/AddToCartScreen';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

function Home({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="AddToCartScreen"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#545454',
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#FFFFFF',
          paddingBottom: 2,
          paddingTop: 6,
          marginTop: 5
        },
        tabBarLabelStyle: {
          fontFamily: 'YourFontFamily', // Specify your font family
          fontSize: 12, // Specify your font size
          fontWeight: '700'
        },
      }}
    >
      <Tab.Screen
        name="AddToCartScreen"
        component={AddToCartScreen}
        options={{
          tabBarLabel: 'Add To Cart',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const sourceImage = focused ? require('../assets/cart-activated.png') : require('../assets/cart.png');
            return <Image style={styles.icon} source={sourceImage} />;
          },
        }}
      />
      <Tab.Screen
        name="ProductsScreen"
        component={MealsOverviewScreen}
        options={{
          tabBarLabel: 'Products',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const sourceImage = focused ? require('../assets/product-activated.png') : require('../assets/product.png');
            return <Image style={styles.icon} source={sourceImage} />;
          },
        }}
      />
      <Tab.Screen
        name="CategoryScreen"
        component={CategoriesScreen}
        options={{
          tabBarLabel: 'Category',
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            const sourceImage = focused ? require('../assets/category-activated.png') : require('../assets/category.png');
            return <Image style={styles.icon} source={sourceImage} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;