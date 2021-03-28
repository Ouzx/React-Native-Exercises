import { StyleSheet, Text, View, VirtualizedList } from 'react-native';

import React from 'react';

const BoxScreen = () => {
    return (
        <View style={ styles.parentView }>
            <View style={ styles.view1 }/>
            <View style={ styles.view2 }/>
            <View style={ styles.view3 }/>
        </View>
    );
}

const styles = StyleSheet.create({
    parentView: {
        justifyContent: 'space-between' ,
        flexDirection: 'row',        
        borderWidth: 2,
        height: 100
    },
    view1: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
        
        
    },
    view2: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        // top: 50
        alignSelf: 'flex-end'
       

    },
    view3: {
        height: 50,
        width: 50,
        backgroundColor: 'purple',
    },
});

export default BoxScreen;