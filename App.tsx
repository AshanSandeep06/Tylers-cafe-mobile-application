import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import CartListScreen from './screens/CartListScreen';

// import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import Store from './reduxStore/store/Store';
import IconButton from './components/IconButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';
import AddToCartScreen from './screens/AddToCartScreen';
import { INativebaseConfig, NativeBaseConfigProvider } from 'native-base/lib/typescript/core/NativeBaseContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  // Drawer Navigator
  const Drawer = createDrawerNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const DrawerNavigator = () => {
    return(
        // <Drawer.Navigator 
        //     // initialRouteName='CategoriesScreen'
        //     screenOptions={{
        //         headerStyle: {backgroundColor: "#351401"}, 
        //         headerTintColor: "#fff", 
        //         sceneContainerStyle: {backgroundColor: "#3f2f25"},
        //         drawerContentStyle: {backgroundColor: '#351401'},
        //         drawerActiveTintColor: '#351401',
        //         drawerActiveBackgroundColor: '#e4baa1',
        //         drawerInactiveTintColor: "#fff"
        //     }}
        // >
        //     <Drawer.Screen name='CategoriesScreen' component={CategoriesScreen} options={{
        //         title: "All Categories", 
        //         // drawerIcon: ({ color, size }) => <Ionicons name='list' size={size} color={color} />,
        //         // drawerIcon: ({ color, size }) => <IconButton icon={'list'} color={color} onPress={undefined} />
        //     }} />
        //     <Drawer.Screen name='FavoritesScreen' component={FavoritesScreen} options={{
        //          title: 'Your Cart',
        //         //  drawerIcon: ({ color, size }) => {
        //         //     return <Ionicons name='star' size={size} color={color} />;
        //         // },
        //     }} />
        // </Drawer.Navigator>

        // =========================================================================================

        <Drawer.Navigator>
            <Drawer.Screen name="CategoriesScreen" component={CategoriesScreen} options={{
                title: "All Categories",
                headerShown: false
            }} />
            <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} options={{
                title: "Your Cart",
                headerShown: false
            }} />
        </Drawer.Navigator>
    );
};

  return (
    <Provider store={Store}>
      <NavigationContainer>

<Stack.Navigator initialRouteName='WelcomeScreen' 
                  screenOptions={{
                      headerStyle: {backgroundColor: "#351401"},
                      headerTintColor: "#fff",
                      // contentStyle:{backgroundColor: "#3f2f25"}
                    }}
              >
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{title: "Welcome Screen", headerShown: false }}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Login Screen", headerShown: false }}/>
                <Stack.Screen name="SignupScreen" component={SignupScreen} options={{title: "Signup Screen", headerShown: false }} />
                <Stack.Screen name="CartListScreen" component={CartListScreen} options={{title: "Cart List Screen", headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{title: "Home Screen", headerShown: false }}
                      // options={{ title: "Meals Overview",
                      //     headerStyle: {backgroundColor: "#351401"}, 
                      //     headerTintColor: "#fff", 
                      //     contentStyle:{backgroundColor: "#3f2f25"} }} 
                  />

                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} options={{title: "Meals Overview", headerShown: false }} />
                <Stack.Screen name='MealDetails' component={MealDetailsScreen} options={{
                    title: "Meal Details",
                    // We can use useLayoutEffect Hook instead of this options Prop
                        headerStyle: {backgroundColor: "#0DAC50"}, 
                        headerTintColor: "#fff", 
                }} />

              </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
