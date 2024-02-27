import { StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { Image } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../reduxStore/slices/FavoriteMealsSlice";
import MealItem from "../components/MealItem";

const MealDetailsScreen = ({ route }) => {
    const { mealId } = route.params;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    // useContext Hook ---->
    // const favoriteMealContext = useContext(FavoriteContext);
    // // Check if already having the meal in favorites using meal id
    // // return a boolean
    // const mealsFavorite = favoriteMealContext.ids.includes(mealId);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealsFavorite = favoriteMealIds.includes(mealId);

    const changeFavoriteStatusHandler = () => {
        if(mealsFavorite){
            // favoriteMealContext.removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }));
        } else {
            // favoriteMealContext.addFavorite(mealId);
            dispatch(addFavorite({ id: mealId }));
        }
    };

    const navigation = useNavigation();

    //useLayoutEffect Hook
    useLayoutEffect(() => {
        navigation.setOptions({
            // headerRight: () => <IconButton icon={mealsFavorite ? 'star' : 'star-outline'} color="white" onPress={changeFavoriteStatusHandler} />
            title: selectedMeal.title
        });
    }, [navigation, changeFavoriteStatusHandler]);

    const mealItemProps = {
        title: selectedMeal.title,
        imageUrl: selectedMeal.imageUrl,
        complexity: selectedMeal.complexity,
        affordability: selectedMeal.affordability,
        duration: selectedMeal.duration,
        quantity: selectedMeal.quantity,
        price: selectedMeal.price,
        categories: selectedMeal.categories,
    };

    return(
        <>
            <MealItem {...mealItemProps} />
        </>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    Text: {
        color: '#fff'
    },

    Image: {
        width: '100%',
        height: 200
    }
});