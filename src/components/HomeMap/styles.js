import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        position: "absolute",
        top: 5,
        width: '95%',
        height: 35,
        backgroundColor: '#ffcbeb',
        margin: 10,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 25
    },
    inputText: {
        fontSize: 13,
        color: '#c24e5e'
    },
    hospital: {
        padding: 10,
        backgroundColor: '#d2cbe4',
        width: "45%",
        alignItems: 'center',
        position: "absolute",
        top: 30,
        margin: 30,
        borderRadius: 25,
    },
    find: {
        padding: 10,
        backgroundColor: '#c24e5e',
        width: "75%",
        alignItems: 'center',
        position: "absolute",
        bottom: 0,
        margin: 40,
        borderRadius: 25,
    }
});

export default styles;