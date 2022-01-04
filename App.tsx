import React from 'react';
import { StyleSheet, Text, useColorScheme, View, Button } from 'react-native';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const colorScheme = useColorScheme(); // TODO define this based on some settings value ["light", "dark", "auto/system"]

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

    return (
        <View style={[styles.container, themeContainerStyle]}>
            <Button
                onPress = {Settings}
                title="Settings"
                color="#bd93f9"
                accessibilityLabel="Open the settings menu"
            />
            <Text style={[themeTextStyle]}></Text>
            <StatusBar />
            <Toast />
        </View>
    );
}


export function Settings() {
    Toast.show({
        type: 'info', // success, error, info -- TODO redefine these to work based on themes
        text1: 'Hello',
        text2: 'The settings menu would normally be open right now!'
    })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    lightContainer: {
        backgroundColor: '#ffffff',
    },
    darkContainer: {
        backgroundColor: '#121212',
    },
    lightThemeText: {
        color: '#000000',
    },
    darkThemeText: {
        color: '#ffffff',
    },
});
