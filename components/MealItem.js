import { color } from "native-base/lib/typescript/theme/styled-system";
import React from "react";
import { View, Text, Image, StyleSheet, Platform, Pressable } from "react-native";
import Badge from "./Badge";

const MealItem = (props) => {
    return(
        <View style={styles.MealItem}>
            <Pressable android_ripple={{color: '#ccc'}} onPress={props.onPress}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: props.imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{props.title}</Text>
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{props.duration}</Text>
                        <Text style={styles.detailItem}>{props.complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{props.affordability.toUpperCase()}</Text>
                    </View>

                    <View style={styles.details}>
                        <Text>Category : </Text>
                        {
                            props.categories.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Text style={styles.detailItem}>{item}</Text>
                                    {index !== props.categories.length - 1 &&<Text>, </Text>}
                                </React.Fragment>
                            ))
                        }
                    </View>

                    <View style={styles.details}>
                        <Text>Quantity : </Text>
                        {/* <Text style={styles.detailItem}>{props.quantity}</Text> */}
                        <Badge count={props.quantity} />
                    </View>

                    <View style={styles.details}>
                        <Text style={[styles.detailItem, {color: 'green', fontSize: 15}]}>Price :</Text>
                        <Text style={[styles.detailItem, {color: 'green'}]}>{props.price.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? 'hidden' : 'visible',
        backgroundColor: "white",
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:{ width: 0, height: 2},
        shadowRadius: 8,
    },

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: 200
    },
    
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8
    },

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
});

export default MealItem;