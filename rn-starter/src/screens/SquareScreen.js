import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorAdjuster from '../componets/ColorAdjuster';
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <Text>
                Square Screen!
            </Text>
            <ColorAdjuster
                color='Red'
                onIncrease={ () => setRed(red + 1)}
                onDecrease={ () => setRed(red - 1)}
            />
            <ColorAdjuster
                color='Green'
                onIncrease={ () => setGreen(green + 1)}
                onDecrease={ () => setGreen(green - 1)}
            />
            <ColorAdjuster
                color='Blue'
                onIncrease={ () => setBlue(blue + 1)}
                onDecrease={ () => setBlue(blue - 1)}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;