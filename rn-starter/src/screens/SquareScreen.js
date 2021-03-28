import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorAdjuster from '../componets/ColorAdjuster';
const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const COLOR_INCREMENT = 20;

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
       }
        
    }
    return (
        <View>
            <Text>
                Square Screen!
            </Text>
            <ColorAdjuster
                color='Red'
                onIncrease={ () => setColor(red, COLOR_INCREMENT)}
                onDecrease={ () => setColor(red, -1 * COLOR_INCREMENT)}
            />
            <ColorAdjuster
                color='Green'
                onIncrease={ () => setColor(green, COLOR_INCREMENT)}
                   onDecrease={ () => setColor(green, -1 * COLOR_INCREMENT)}
            />
            <ColorAdjuster
                color='Blue'
                onIncrease={ () => setColor(blue, COLOR_INCREMENT)}
                onDecrease={ () => setColor(blue, -1 * COLOR_INCREMENT)}
            />
            <View style={{width: 50, height: 50, backgroundColor: `rgb(${red}, ${green}, ${blue} )`} } />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;