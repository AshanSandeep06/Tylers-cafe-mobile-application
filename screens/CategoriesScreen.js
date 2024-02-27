import React from 'react'
import { FlatList, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import { Text } from 'react-native'
import CategoryGridTitle from '../components/CategoryGridTitle';

import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import Category from '../models/Category';

const CategoriesScreen = () => {

    const navigationHook = useNavigation();

    const renderCategoryItem = (item) => {
        const pressHandler = () => {
            // For navigate to Meals Overview Screen
            navigationHook.navigate("MealsOverview", { categoryId: item.id });
        };
    
        return <CategoryGridTitle title={item.title} color={item.color} onPress={pressHandler} />
    };

  return (
    <>
        <View style={{justifyContent:'space-between', flexDirection: 'row', alignItems:'center', height: 65, backgroundColor:'#0DAC50'}}>
          <Text style={{marginHorizontal:17, fontSize: 19, fontWeight:'bold', color:'white'}}>CATEGORIES</Text>
        </View>

        <FlatList
        data={CATEGORIES}
        keyExtractor={(category) => category.id}
        // renderItem={(allCategories) => <Text>{allCategories.item.title}</Text>}
        renderItem={(allCategories) => renderCategoryItem(allCategories.item)}
        // Items render wenakota columns 2 kata render wenne
        numColumns={2}
    />
    </>
  )
}

export default CategoriesScreen;