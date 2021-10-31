import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        margin: 5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        backgroundColor: '#d24e5e',
    },
    img: {
        padding: 10,
        flex: 2,
        height: 150,
        resizeMode: "contain",
    },
    textContainer: {
        padding: 10,
        flex: 3,
    },
    ratings: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;