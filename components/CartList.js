import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Button, StyleSheet, Alert } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite, removeAllFavorites, setCheckoutPrice  } from '../reduxStore/slices/FavoriteMealsSlice';
import { useNavigation } from '@react-navigation/native';
import CartItem from './CartItem';
import CustomAlert from './CustomAlert';

const CartList = (props) => {
    const [allCartList, setAllCartList] = useState([]);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const checkoutPrice = useSelector((state) => state.favoriteMeals.checkoutPrice);

    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(1);

    const [isVisible, setIsVisible] = useState(false);

    const showAlert = () => {
      setIsVisible(true);
    };

    const hideAlert = () => {
      setIsVisible(false);
    };

    const changeFavoriteStatusHandler = (mealId) => {
      let favoriteMeal = null;
      if(favoriteMealIds) {
        favoriteMeal = favoriteMealIds.includes(mealId);
      }
        if(favoriteMeal){
          dispatch(removeFavorite(mealId));
        } else {
          dispatch(addFavorite(mealId));
        }
    };

    const navigation = useNavigation();

    //useLayoutEffect Hook
    useLayoutEffect(() => {
        navigation.setOptions({
            // headerRight: () => <IconButton icon={mealsFavorite ? 'star' : 'star-outline'} color="white" onPress={changeFavoriteStatusHandler} />
            // title: selectedMeal.title
        });
    }, [navigation, changeFavoriteStatusHandler]);

    useEffect(() => {
      let total = 0;
      MEALS.filter((meal) => favoriteMealIds.includes(meal.id)).forEach(item => {
        const price = parseInt(item.price.trim().split(" ")[0]);
        total += price;
      });
      dispatch(setCheckoutPrice(total));

      if(favoriteMealIds) {
        setAllCartList(MEALS.filter((meal) => favoriteMealIds.includes(meal.id)));
      }
    }, [favoriteMealIds]);

    const placeOrder = () => {
      if(favoriteMealIds.length > 0) {
        Alert.alert(
          "Success",
          "Your Order has been Successfully Placed.!",
          [
            {
              text: "OK",
              style: "cancel",
            }
          ],
          { cancelable: false }
        );
        dispatch(removeAllFavorites());
        dispatch(setCheckoutPrice(0))
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert(
          "Error",
          "Your Cart is empty.!",
          [
            {
              text: "OK",
              style: "cancel",
            }
          ],
          { cancelable: false }
        );
        navigation.navigate('HomeScreen');
      }
    }

  return (
    <>
      <View style={{justifyContent:'space-between', flexDirection: 'row', alignItems:'center', height: 65, backgroundColor:'#0DAC50', marginBottom: 10}}>
        <Text style={{marginHorizontal:17, fontSize: 19, fontWeight:'bold', color:'white'}}>CART LIST</Text>
        <Image style={styles.imageLogo} source={require('../assets/plus.png')} />
      </View>

      <ScrollView>

     {
       allCartList.map((item, index) => (
        <CartItem key={index} item={item} />
       ))
     }

        {/* ------------------------- */}

        {/* ===================================================================================================== */}
      </ScrollView>

      <View style={{backgroundColor:'#0DAC50'}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginHorizontal: 17, height:35, marginTop: 10}}>
            <Text style={{fontSize: 16, color:'white', fontWeight:'bold'}}>Total (Tax Include)</Text>
            <Text style={{fontSize: 26, color:'white', fontWeight:'bold', position: 'relative'}}>
              {checkoutPrice} LKR
            </Text>
        </View>
        
        <View style={{alignItems:'center'}}>
          <TouchableOpacity onPress = {() =>{ placeOrder() }}
          style={{
            width: 375,
            height: 45,
            borderRadius: 6,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            marginBottom: 25,
          }}>
            <Text style={{fontSize: 16, fontWeight:'bold'}}>CHECKOUT</Text>
          </TouchableOpacity>

          <CustomAlert
            isVisible={isVisible}
            onClose={hideAlert}
            title="Success"
            message="Your Order has been Successfully Placed.!"
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  imageLogo:{
    width: 30,
    height: 30,
    position: 'relative',
    right: 10
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
}
});

export default CartList;