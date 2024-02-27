// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import {
//   StyleSheet,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   SafeAreaView,
//   View,
//   ScrollView,
//   Alert,
// } from 'react-native';

// export default function Login() {
//   const navigation = useNavigation();
//   const [loginObj, setLoginObj] = useState({
//     email: '',
//     password: '',
//   });

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContainer}>
//         <ImageBackground
//           source={require('../assets/Swagger-logo.png')}
//           style={styles.bgImage}
//         />

//         <Text style={styles.welcomeText}>Welcome!</Text>

//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter your email address"
//             onChangeText={(email) => setLoginObj({ ...loginObj, email })}
//             value={loginObj.email}
//           />
//           <TextInput
//             style={styles.textInput}
//             placeholder="Password"
//             secureTextEntry={true}
//             onChangeText={(password) => setLoginObj({ ...loginObj, password })}
//             value={loginObj.password}
//           />
//           <TouchableOpacity style={styles.forgotPasswordBtn}>
//             <Text style={styles.forgotPasswordText}>Forget Password?</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={styles.loginBtn}
//             onPress={async () => {
//               if (!loginObj.email || !loginObj.password) {
//                 Alert.alert('Please fill in all fields');
//               } else {
//                 // Your login logic here
//               }
//             }}>
//             <Text style={styles.loginBtnText}>Login</Text>
//           </TouchableOpacity>

//           <View style={styles.divider} />

//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('UserAccount');
//             }}>
//             <Text style={styles.registerText}>Need an account? Register here!</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollViewContainer: {
//     alignItems: 'center',
//   },
//   bgImage: {
//     width: '100%',
//     height: 200,
//     marginBottom: 20,
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   inputContainer: {
//     width: '80%',
//     alignItems: 'center',
//   },
//   textInput: {
//     width: '100%',
//     padding: 12,
//     marginBottom: 10,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//   },
//   forgotPasswordBtn: {
//     alignSelf: 'flex-end',
//     marginBottom: 10,
//   },
//   forgotPasswordText: {
//     fontSize: 16,
//     color: '#1abc9c',
//   },
//   loginBtn: {
//     width: '100%',
//     backgroundColor: '#1abc9c',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginBtnText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#ccc',
//     width: '100%',
//     marginVertical: 20,
//   },
//   registerText: {
//     fontSize: 16,
//     color: '#1abc9c',
//   },
// });

// ==========================================================================================================


import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import AsyncStorage from '@react-native-community/async-storage';
// import { Icon, Input, Toast} from 'native-base';
// import Item from 'native-base'
// import Form from 'native-base'
// import Label from 'native-base'

// import bgImage from '../assets/Swagger-logo.png'
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import { useDispatch, useSelector } from 'react-redux'
// import { connect } from "react-redux";
// import { login, getItem } from '../Redux/Actions/auth';

const { width: WIDTH } = Dimensions.get('window')

{/* READY FUNCTION LOGIN */}
const Login = (props) => {
  const [dataLogin, setDataLogin] = useState({username: '', password: ''});
  // const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(true)
  const [press, setPress] = useState(false)

{/* READY FUNCTION HANDLE LOGIN */}
  const handleLogin = async () => {
    // dispatch(login(dataLogin))
    //   .then(response => {
    //     if (response.value.data.status === 200) {
    //     //   AsyncStorage.setItem('user', JSON.stringify(response.value.data.data), () => {});
    //       showToast("Login Success", "success");
    //       checkUser();
    //       setTimeout(() => {
    //         props.navigation.navigate('CobaTab');
    //       }, 500);
    //     } else {
    //       showToast(response.value.data.data, "warning");
    //     }
    //   })
    //   .catch(error => alert(error.value.data.error));

    // ----------------------------------------------------------------------

    if(dataLogin.username !== "" && dataLogin.password !== "") {
      try {
        // Retrieve the item with the key 'searchCartItem'
        let auth = await AsyncStorage.getItem('authCredentials');
        
        if (auth !== null) {
          auth = JSON.parse(auth);
          if(auth) {
            if(auth.username == dataLogin.username && auth.password == dataLogin.password) {
              Alert.alert(
                "Success",
                "Login Successfully.!",
                [
                  {
                    text: "OK",
                    style: "cancel",
                  }
                ],
                { cancelable: false }
              );

              navigation.navigate("HomeScreen");
            } else {
              Alert.alert(
                "Error",
                "Invalid Credentials.!",
                [
                  {
                    text: "OK",
                    style: "cancel",
                  }
                ],
                { cancelable: false }
              );
            }
          } else {
            Alert.alert(
              "Error",
              "Something went wrong, Please try again.!",
              [
                {
                  text: "OK",
                  style: "cancel",
                }
              ],
              { cancelable: false }
            );
          }
        } else {
          Alert.alert(
            "Error",
            "Invalid Credentials.!",
            [
              {
                text: "OK",
                style: "cancel",
              }
            ],
            { cancelable: false }
          );
        }
      } catch (error) {
        Alert.alert(
          "Error",
          error.message,
          [
            {
              text: "OK",
              style: "cancel",
            }
          ],
          { cancelable: false }
        );
      }
    } else {
      Alert.alert(
        "Error",
        "Please Input all the Fields.!",
        [
          {
            text: "OK",
            style: "cancel",
          }
        ],
        { cancelable: false }
      );
    }
    };

{/* READY FUNCTION LOGIN AUTH */}
  // const checkUser = () => {
  //   dispatch(getItem())
  //   .then(response => { console.log('asdasd',response.value);
  //     if (response.value != null) {
  //       props.navigation.navigate('CobaTab')
  //       showToast("Login Success, success")
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }

  useEffect(() => {
    const check = setTimeout(() => {
      // checkUser()
    }, 0)

    return () => {
      clearTimeout(check)
    }
  },[])
{/* READY FUNCTION HANDLE INFO */}
    // const showToast = (message, types) => {
    //   Toast.show({
    //     text: message,
    //     buttonText: "Okay",
    //     type: types == "warning" ? "warning":"success",
    //     duration: 5000,
    //     position: "bottom"
    //   })
    // }

{/* READY FUNCTION SHOW PASSWORD */}
  const pass = () => {
    if (press == false){
      setShowPass(false)
      setPress(true)
    } else {
      setShowPass(true)
      setPress(false)
    }
  }

  const navigation = useNavigation();
  return (
    <>
    {/* READY LOGO */}
      <ImageBackground source={require('../assets/bgImage.jpg')} style={styles.backgroundContainer}>
        {/* <View style={styles.logoContainer}>
          <Image source={require('../assets/cafe-logo.png')} style={styles.logoLogin} />
          <Text style={styles.logoText}>Move Fast and Get Rich</Text>
          <Text style={styles.textLogin}>LOGIN</Text>
        </View> */}

        <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo-login-1.png')}
          style={styles.logoLogin}
        />
        <Text style={[styles.logoText, styles.text]}>Where Every Flavor Finds Its Home</Text>
        <Text style={[styles.textLogin]}>LOGIN</Text>
    </View>

    {/* READY INPUT */}
        <View>
        <Image source={require('../assets/username.png')}style={{width: 22, height: 22, position: 'relative', top: 48, left: 36}} />
        {/* <Icon name="person-outline" size={28} color="black" style={styles.inputIcon} /> */}
          <TextInput
            onChangeText={(text) => { setDataLogin({...dataLogin, username: text})}}
            value={dataLogin.username}
            style={[styles.inputUsername, styles.text]}
            placeholder={'Username'}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View>
        <Image source={require('../assets/password.png')}style={{width: 22, height: 22, position: 'relative', top: 46, left: 36}} />

        {/* <Icon name="lock-closed-outline" size={28} color="black" style={styles.inputIcon} /> */}
          <TextInput
            onChangeText={(text) => {setDataLogin({...dataLogin, password: text})}}
            value={dataLogin.password}
            style={[styles.inputUsername, styles.text]}
            placeholder={'Password'}
            secureTextEntry={showPass}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
          />
        </View>

      {/* READY BUTTOM SUBMIT */}
        <TouchableOpacity onPress={() => handleLogin()} activeOpacity={.7} style={styles.btnLogin}>
          <Text style={[styles.textsubmit]} > LOGIN </Text>
        </TouchableOpacity>

      {/* READY ACCESS DASBOARD */}
        <View style={{marginTop: 15, flexDirection:'row'}}>
          <Text style={{ fontSize: 15}}>Dont Have Account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
            <Text style={[{ fontSize: 15, fontWeight:'bold', color:'#2bb358'}, styles.text]}> Register Now </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoLogin:{
    width: 150,
    height: 120,
    // objectFit: 'fill'
  },
  logoContainer:{
    alignItems:'center',
    marginBottom: 50
  },
  logoText:{
    color: 'white',
    fontSize: 21,
    fontWeight: '700',
    marginTop: 10,
    opacity: 0.8
  },
  inputUsername:{
    width: WIDTH - 75,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#e3e3e3',
    color: 'black',
    paddingLeft: 48,
    marginTop: 15,
    marginHorizontal: 25,
    opacity: 0.5
  },
  inputIcon:{
    position: 'absolute',
    top: 21,
    left: 43
  },
  btnEye:{
    position: 'absolute',
    top: 24,
    right: 43
  },
  btnLogin:{
    width: WIDTH - 75,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#2bb358',
    justifyContent: 'center',
    marginTop: 30,
  },
  textsubmit: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textLogin:{
    color: 'white',
    fontSize: 26,
    marginTop: 30,
    fontFamily: 'Poppins-Regular', // This is the name you'll use to refer to your font
    fontWeight: '700', // You can also specify 'bold' for fontWeight
  },
  logo: {
    width: '80%', // Adjust the width to take 80% of the parent container
    aspectRatio: 1, // Maintain aspect ratio
  },
  text: {
    fontFamily: 'Poppins-Regular', // This is the name you'll use to refer to your font
    fontWeight: 'normal', // You can also specify 'bold' for fontWeight
  },

});

export default Login;