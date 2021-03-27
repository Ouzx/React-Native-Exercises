import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorAdjuster from '../componets/ColorAdjuster';
const SquareScreen = () => {
    return (
        <View>
            <Text>
                Square Screen!
            </Text>
            <ColorAdjuster color='Red'/>
            <ColorAdjuster color='Green'/>
            <ColorAdjuster color='Blue'/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;