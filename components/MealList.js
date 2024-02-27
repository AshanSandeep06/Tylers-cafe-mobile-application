import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ itemData }) => {
    const navigation = useNavigation();

    const renderMealItems = (itemData) => {
        const item = itemData.item;

        const pressHandler = () => {
            // Navigate to Meal Details Screen
            navigation.navigate("MealDetails", { mealId: item.id });
        };

            {/* Creating props of Meal Item */}
            const mealItemProps = {
                title: item.title,
                imageUrl: item.imageUrl,
                complexity: item.complexity,
                affordability: item.affordability,
                duration: item.duration,
                quantity: item.quantity,
                price: item.price,
                categories: item.categories,
                onPress: pressHandler
            };

        return(
            <View>
                <MealItem {...mealItemProps} /> 
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={itemData}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItems}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealList;