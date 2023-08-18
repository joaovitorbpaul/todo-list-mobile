import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1A1A1A'
    },
    header: {
        paddingTop: 70,
        paddingBottom: 70,
        backgroundColor: '#0D0D0D',
        width: '100%',
        alignItems: 'center'
    },
    addTodoInput: {
        flexDirection: 'row'
    },
    addButton: {
        backgroundColor: '#1E6F9F',
    }
});