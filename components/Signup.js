import React, {useState} from 'react';
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

// import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: WIDTH } = Dimensions.get('window')

{/* READY FUNCTION SIGNUP */}
const Signup = () => {
  const [data, setData] = useState({fullName: '', telNo: '', username: '', password: ''});
  const [showPass, setShowPass] = useState(true)
  const [press, setPress] = useState(false)

  // const dispatch = useDispatch();

{/* READY FUNCTION HANDLE REGISTER */}
  const handleRegister = async() => {
    // await dispatch(register(data))
    // .then(response => {
    //   if (response.value.data.status === 200) {
    //       showToast("Success Create New User", "success");
    //       setTimeout(() => {
    //         props.navigation.navigate('Login');
    //       }, 500);
    //   } else {
    //   showToast(response.value.data.error, "warning");
    //   }
    // })
    // .catch(error => alert(error.value.data.message));

    // -----------------------------------------------------

    if(data.fullName !== "" && data.telNo !== "" && data.password !== "" && data.username !== "") {
      // Convert 'item' to a JSON string and store it in AsyncStorage
    AsyncStorage.setItem('authCredentials', JSON.stringify(data))
      .then(() => {
        Alert.alert(
          "Success",
          "User has been Successfully Registered.!",
          [
            {
              text: "OK",
              style: "cancel",
            }
          ],
          { cancelable: false }
        );

        navigation.navigate("LoginScreen");
      })
      .catch((error) => {
        Alert.alert(
          "Error",
          "Error Registering the User.!",
          [
            {
              text: "OK",
              style: "cancel",
            }
          ],
          { cancelable: false }
        );
      });
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

{/* READY FUNCTION PASS */}
  const pass = () => {
    if (press == false){
      setShowPass(false)
      setPress(true)
    } else {
      setShowPass(true)
      setPress(false)
    }
  }

{/* READY FUNCTION HANDLE INFO */}
  // const showToast = (message, types) => {
  //   Toast.show({
  //     text: message,
  //     buttonText: "Okay",
  //     type: types == "warning" ? "warning":"success",
  //     duration: 10000,
  //     position: "bottom"
  //   })
  // }

  const navigation = useNavigation();

  return (
    <>
    {/* READY LOGO */}


    <View style={[styles.backgroundContainer, {position: 'relative'}]}>
    <View style={{position: 'absolute',height: 335, width: '100%', backgroundColor:'#2bb358', top: 0, borderBottomEndRadius: 65, borderBottomStartRadius: 65}}>

</View>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo-login-1.png')}style={styles.logoLogin} />
          <Text style={[styles.logoText, styles.text]}>Where Every Flavor Finds Its Home</Text>
          <Text style={styles.textLogin}>SIGN UP</Text>
        </View>

    {/* READY INPUT */}
        <View>
          {/* <Icon name={'md-person'} size={28} color={'black'}
            style={styles.inputIcon}/> */}
  <Image source={require('../assets/fullName.png')}style={{width: 22, height: 22, position: 'absolute', top: 27, left: 36}} />
          <TextInput
            onChangeText={(text) => {setData({...data, fullName: text})}}
            value={data.fullName}
            style={[styles.inputUsername, styles.text]}
            placeholder={'Full Name'}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View>
          {/* <Icon name={'md-person'} size={28} color={'black'}
            style={styles.inputIcon}/> */}
  <Image source={require('../assets/mobile.png')}style={{width: 22, height: 22, position: 'absolute', top: 26, left: 36}} />
          <TextInput
            onChangeText={(text) => {setData({...data, telNo: text})}}
            value={data.telNo}
            style={[styles.inputUsername, styles.text]}
            placeholder={'Mobile Number'}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View>
          {/* <Icon name={'md-person'} size={28} color={'black'}
            style={styles.inputIcon}/> */}
  <Image source={require('../assets/username.png')}style={{width: 22, height: 22, position: 'absolute', top: 26, left: 36}} />
          <TextInput
            onChangeText={(text) => {setData({...data, username: text})}}
            value={data.username}
            style={[styles.inputUsername, styles.text]}
            placeholder={'Username'}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
          />
        </View>

        <View>
          {/* <Icon name={'ios-lock'} size={28} color={'black'}
            style={styles.inputIcon}/> */}
            <Image source={require('../assets/password.png')}style={{width: 22, height: 22, position: 'absolute', top: 24, left: 36}} />
          <TextInput
            onChangeText={(text) => {setData({...data, password: text})}}
            value={data.password}
            style={[styles.inputUsername, styles.text]}
            placeholder={'Password'}
            secureTextEntry={showPass}
            placeholderTextColor={'black'}
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity style={styles.btnEye}
            onPress={() => pass()}>
            {/* <Icon name={press == false ? 'ios-eye' : 'ios-eye-off'}
                  size={26} color={'grey'}/> */}
          </TouchableOpacity>
        </View>

      {/* READY BUTTOM SUBMIT */}
        <TouchableOpacity style={styles.btnLogin} onPress={()=> handleRegister()} >
          <Text style={styles.textsubmit}> CREATE ACCOUNT </Text>
        </TouchableOpacity>

      {/* READY CHANGE LOGIN */}
        <View style={{marginTop: 15, flexDirection:'row'}}>
          <Text style={{ fontSize: 15}}>Already Have Account?</Text>
          <TouchableOpacity onPress = {() =>{ navigation.navigate('LoginScreen') }}>
            <Text style={[{ fontSize: 15, fontWeight:'bold', color:'#2bb358'}, styles.text]}> Login Now </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  logoContainer:{
    alignItems:'center',
    marginBottom: 50
  },
  logoText:{
    color: 'white',
    fontSize: 21,
    fontWeight: '500',
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
    marginTop: 30
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
    fontWeight: 'bold',
    marginTop: 30,
  },
  text: {
    fontFamily: 'Poppins-Regular', // This is the name you'll use to refer to your font
    fontWeight: 'normal', // You can also specify 'bold' for fontWeight
  },
});

export default Signup;