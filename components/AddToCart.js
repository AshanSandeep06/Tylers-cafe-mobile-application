import React, {useEffect, useState, useLayoutEffect} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { MEALS } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import { addFavorite, removeFavorite } from '../reduxStore/slices/FavoriteMealsSlice';

const AddToCart = (props) => {
  const [page, setPage] = useState(0);
  const [infoPage, setInfoPage] = useState({maxPage: 0, totalAllProduct: 0});
  const [rowsPerPage, setRowsPerPage] = useState(20);

  // const fetchDataProduct = async () => {
  //   try {
  //     const response = await dispatch(getProduct(rowsPerPage, page + 1, props.item.token))
  //     setInfoPage (response.value.data.data.infoPage);
  //   } catch (error) {
  //     console.log (error);
  //   }
  // }

  // useEffect(() => {
  //     fetchDataProduct ();
  // },[page, rowsPerPage])

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const changeFavoriteStatusHandler = (mealId) => {
    let favoriteMeal = null;
    console.log("Favorites: "+favoriteMealIds);
    
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

  return(
    <>
    <View style={styles.viewBody}>

      <View style={styles.viewSearchCart}>
    {/* SEARCH NAVIGATIONS */}
        <View style={styles.viewSearch}>
          <TextInput placeholder='what do you want to search'
            style={styles.inputText}
          />
          <Image style={styles.cartImage}
            source={require('../assets/search.png')}
          />
        </View>

    {/* CHART ICONS */}
        <View style={styles.viewCartIcons}>
          <TouchableOpacity onPress={() => { navigation.navigate('CartListScreen') }}>
            <Image style={styles.imageBasket}
              source={require('../assets/search-cart.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

    {/* FEATURE APPS */}
      <View style={styles.viewFeature}>
        <View style={styles.viewLogo}>
            <Image style={styles.imageLogo} source={require('../assets/cafe-logo.png')} />
            <Text style={[{position: 'relative', right: 55, top: 3, fontSize: 22, fontWeight: 'bold', color: 'white'}]}> Tyler's Cafe</Text>
            <Text style={styles.textLogo}> ORDER</Text>
        </View>

        <View style={styles.viewMenu}>
          <View style={styles.viewMenuBlue}>
            <TouchableOpacity>
              <View style = {styles.TouchableOpacity}>
                <Text style = {styles.textMenu}>List</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewMenuBlue}>
            <TouchableOpacity>
              <View style = {styles.TouchableOpacity}>
                <Text style = {styles.textMenu}>New</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewMenuBlue}>
          <TouchableOpacity>
            <View style = {styles.TouchableOpacityCategory}>
              <Text style = {styles.textMenu}>Category</Text>
            </View>
          </TouchableOpacity>
          </View>
          <View style={styles.viewMenuBlue}>
          <TouchableOpacity>
            <View style = {styles.TouchableOpacityName}>
              <Text style = {styles.textMenu}>Name</Text>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </View>

    {/* PRODUCT APPS */}
      <ScrollView style={styles.scrollMargin} showsVerticalScrollIndicator={false}>
        {MEALS.map((data, index) => (
          <View key={index}>
            <View key={index} style={styles.viewContentImage}>
              <Image
                 style={styles.imageContent}
                 source={{uri: data.imageUrl}}
               />
               <View style={styles.viewContentText}>
                 <Text style={styles.contentTitle}>{data.title}</Text>
                 <Text style={styles.contentDesc}>{data.title}</Text>
                 <View style={styles.viewContentPrice}>
                   <Text style={styles.textContent}>{data.price}</Text>
                     <TouchableOpacity onPress={() => changeFavoriteStatusHandler(data.id)}
                       style={styles.contentTouchable}
                     >
                     <Text style={styles.textCart}> Add Cart </Text>
                   </TouchableOpacity>
                 </View>
               </View>
            </View>
            </View>
          )
        )}
      </ScrollView>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  inputText:{
    borderWidth:1,
    borderColor:'#E8E8E8',
    borderRadius: 25,
    height: 50,
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    backgroundColor:'white',
    marginRight: 9
  },
  viewBody: {
    flex: 1,
    backgroundColor:'white'
  },
  viewSearchCart: {
    marginHorizontal: 17,
    flexDirection:'row',
    paddingTop:15
  },
  viewSearch: {
    position:'relative',
    flex:1
  },
  cartImage: {
    width:25,
    height:25,
    position:'absolute',
    top: 12,
    left: 12
  },
  viewCartIcons: {
    width:35,
    alignItems:'center',
    justifyContent:'center'
  },
  imageBasket: {
    width: 28,
    height: 28
  },

// FEATURE APPS STYLE
  viewFeature: {
    marginHorizontal:17,
    marginTop: 15
  },
  viewLogo: {
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor:'#0DAC50',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    padding:13
  },
  imageLogo: {
    width: 38,
    height: 38,
  },
  textLogo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  viewMenu: {
    flexDirection: 'row',
    paddingTop:20,
    paddingBottom: 14,
    backgroundColor:'#1DBC60',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },

// MENU BLUE STYLE
  viewMenuBlue: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  TouchableOpacity:{
    backgroundColor: 'white',
    paddingRight:25,
    paddingLeft:25,
    paddingTop:3,
    paddingBottom:3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  TouchableOpacityCategory:{
    backgroundColor: 'white',
    paddingRight:15,
    paddingLeft:15,
    paddingTop:3,
    paddingBottom:3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  TouchableOpacityName:{
    backgroundColor: 'white',
    paddingRight:19,
    paddingLeft:19,
    paddingTop:3,
    paddingBottom:3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  textMenu:{
    color: 'green'
  },

// CONTENT APP STYLE
  scrollMargin: {
    marginTop:10,
    marginBottom: 15
  },
  viewContentImage: {
    marginHorizontal:17,
    marginTop: 10,
    flexDirection:'row',
    position:'relative'
  },
  imageContent: {
    width: 100,
    height:100,
    borderRadius:5
  },
  viewContentText:{
    marginHorizontal:17,
    width:'69%'
  },
  contentTitle:{
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop:5
  },
  contentDesc:{
    fontSize: 14,
    paddingTop:5
  },
  viewContentPrice:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  textContent:{
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop:15
  },
  contentTouchable:{
    borderRadius: 25,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#0DAC50',
    padding: 5,
    paddingLeft:20,
    paddingRight:20
  },
  textCart:{
    fontWeight: 'bold',
    color:'white'
  }
});

export default AddToCart;