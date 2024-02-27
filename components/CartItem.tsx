import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";
import Swal from "sweetalert2";
import { addFavorite, removeFavorite, removeAllFavorites, setCheckoutPrice  } from '../reduxStore/slices/FavoriteMealsSlice';

const CartItem = ({ item }) => {
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const checkoutPrice = useSelector((state) => state.favoriteMeals.checkoutPrice);

    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(1);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const [itemPrice, setItemPrice] = useState("");

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

    const handleDecreaseCount = (mealId) => {
        if (itemCount > 1) {
          let qtyCount: number = itemCount - 1;
          setItemCount(qtyCount);

          setItemPrice(item.price.split(" ")[0] * qtyCount+" LKR")

          // Setting Total checkout price
          dispatch(setCheckoutPrice(parseInt(checkoutPrice) - parseInt(item.price.split(" ")[0])))
        }
    };

    useEffect(() => {
      setTitle(item.title);
      setCategory(item.categories[0]);
      setId(item.id);
      setItemPrice(item.price);
    }, [])
  
      const handleIncreaseCount = (mealId) => {
        for (let item of MEALS) {
          if (item.id == mealId) {
            if (item.quantity > 0) {
              if (item.quantity > itemCount) {
                let qtyCount: number = itemCount + 1;
                setItemCount(qtyCount);

                // Setting up item's price
                let singleItemPrice = item.price.split(" ")[0] * qtyCount;
                setItemPrice(singleItemPrice+" LKR")

                // Setting Total checkout price
                dispatch(setCheckoutPrice(parseInt(checkoutPrice) + parseInt(item.price.split(" ")[0])))

              } else {
                Alert.alert(
                  "Success",
                  "Can't Increase count of this item cause item limit is reached!",
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
                "Success",
                "There has Zero Quantity of this Item..!",
                [
                  {
                    text: "OK",
                    style: "cancel",
                  }
                ],
                { cancelable: false }
              );
            }
          }
        }
      };

    return (
        <React.Fragment>
            <View style={{paddingBottom:10, marginHorizontal:17, borderBottomWidth: 1, borderRadius: 4, borderColor: '#ddd', borderRightWidth: 0, borderUpWidth: 0, borderLeftWidth: 0, }}>
        <View style={{flexDirection:'row', height:60, marginTop:10,}}>
          <View style={{width:60,  justifyContent:'center', alignItems:'center'}}>
            <Image style={{width: 60, height:60, borderRadius:5, marginLeft:20}} source={{uri: item.imageUrl}} />
          </View>

          <View style={{flex:1, justifyContent:'space-between', padding:15, marginLeft: 10}}>
            <Text style={{fontSize:17, fontWeight:'bold', alignSelf: 'stretch'}}>{title}</Text>
            <Text style={styles.detailItem}>{category}</Text>
            {/* {
                            item.categories.map((category, index1) => (
                                <React.Fragment key={index1}>
                                    <Text style={styles.detailItem}>{category}</Text>
                                    {index1 !== item.categories.length - 1 &&<Text>, </Text>}
                                </React.Fragment>
                            ))
            } */}
          </View>
          <View style={{width:120, justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'green', position: 'relative', left: 15}}>{itemPrice}</Text>
          </View>
        </View>
  {/* READY BUTTON PLUS */}
        <View style={{marginHorizontal:10, marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => {handleDecreaseCount(id)}}>
              <Image style={styles.imageLogo} source={require('../assets/minus.png')} />
            </TouchableOpacity>

            <Text style={{fontSize:22, marginRight: 20}}>{itemCount}</Text>

            <TouchableOpacity onPress={() => {handleIncreaseCount(id)}}>
              <Image style={styles.imageLogo} source={require('../assets/plus-01.png')} />
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={() => {changeFavoriteStatusHandler(item.id)}}>
              <Image style={styles.imageLogo} source={require('../assets/trash.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
        </React.Fragment>
    );
};

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

export default CartItem;