import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorAdjuster from '../componets/ColorAdjuster';
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREMENT = 20;
    return (
        <View>
            <Text>
                Square Screen!
            </Text>
            <ColorAdjuster
                color='Red'
                onIncrease={ () => setRed(red + COLOR_INCREMENT)}
                onDecrease={ () => setRed(red - COLOR_INCREMENT)}
            />
            <ColorAdjuster
                color='Green'
                onIncrease={ () => setGreen(green + COLOR_INCREMENT)}
                onDecrease={ () => setGreen(green - COLOR_INCREMENT)}
            />
            <ColorAdjuster
                color='Blue'
                onIncrease={ () => setBlue(blue + COLOR_INCREMENT)}
                onDecrease={ () => setBlue(blue - COLOR_INCREMENT)}
            />
            <View style={{width: 50, height: 50, backgroundColor: `rgb(${red}, ${green}, ${blue} )`} } />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;