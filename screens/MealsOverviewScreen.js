import { Text, View, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FlatList } from "react-native";
import MealList from "../components/MealList";
import { useNavigation } from "@react-navigation/native";

const MealsOverviewScreen = (props) => {
    const { route, navigation } = props;

    // Accessing categoryId with optional chaining
    const categoryId = route?.params?.categoryId;

    // Check if categoryId exists before using it
    if (categoryId !== undefined) {
        const displayMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0);
        return <>
         <View style={{justifyContent:'space-between', flexDirection: 'row', alignItems:'center', height: 65, backgroundColor:'#0DAC50'}}>
            <Text style={{marginHorizontal:17, fontSize: 19, fontWeight:'bold', color:'white'}}>PRODUCT LIST</Text>
            <Image style={styles.imageLogo} source={require('../assets/plus.png')} />
        </View>

        <MealList itemData={displayMeals} />
        </>
    } else {
        return <>
        <View style={{justifyContent:'space-between', flexDirection: 'row', alignItems:'center', height: 65, backgroundColor:'#0DAC50'}}>
           <Text style={{marginHorizontal:17, fontSize: 19, fontWeight:'bold', color:'white'}}>PRODUCT LIST</Text>
           <Image style={styles.imageLogo} source={require('../assets/plus.png')} />
       </View>

       <MealList itemData={MEALS} />
       </>
    }
}

const styles = StyleSheet.create({
    imageLogo:{
      width: 30,
      height: 30,
      position: 'relative',
      right: 15
    },
});

export default MealsOverviewScreen;