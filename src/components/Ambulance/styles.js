import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    container: {
        backgroundColor: '#c24e5e',
        alignItems: 'center',
        bottom: -35,
    },
    imageContainer: {
        height: 100,
        width: 100,
        backgroundColor: '#d3d3d3',
        borderRadius: 50,
        padding: 25,
        margin: 25,
    },
    image: {
        resizeMode: 'contain',
        height: 50,
        width: 50,
    },
    bookContainer: {
        width: '100%',
        paddingLeft: 25,
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 25,
        backgroundColor: '#269d54',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
    },
});

export default styles;