import { Text, Pressable, View, StyleSheet, Platform } from "react-native";

const CategoryGridTitle = ({ title, color, onPress }) => {
    return(
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable onPress={onPress} android_ripple={{color: '#ccc'}} style={styles.button}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        // To add shadow and elevation
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset:{ width: 0, height: 2},
        shadowRadius: 8,
        // Using Platform API
        overflow: Platform.OS === "android" ? 'hidden' : 'visible',
    },

    button: {
        flex: 1,
        // borderWidth: 2,
        // borderColor: 'red'
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'red'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default CategoryGridTitle;