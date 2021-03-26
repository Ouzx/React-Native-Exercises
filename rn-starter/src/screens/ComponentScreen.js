import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ComponentScreen = () => {
    const nameProp = "Oguzhan"
    return(
    <View> 
        <Text style={styles.headerStyle}>Getting started with React Native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {nameProp}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    subHeaderStyle:{
        fontSize: 20
    }
});

export default ComponentScreen;

