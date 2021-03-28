import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorAdjuster from '../componets/ColorAdjuster';

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };

        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0})
    const { red, green, blue } = state // destruction
    const COLOR_INCREMENT = 20;

    return (
        <View>
            <Text>
                Square Screen!
            </Text>
            <ColorAdjuster
                color='Red'
                onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
                onDecrease={ () => dispatch({colorToChange: 'red', amount: -COLOR_INCREMENT})}
            />
            <ColorAdjuster
                color='Green'
                onIncrease={ () => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
                   onDecrease={ () => dispatch({colorToChange: 'green', amount: -COLOR_INCREMENT})}
            />
            <ColorAdjuster
                color='Blue'
                onIncrease={ () => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
                onDecrease={ () => dispatch({colorToChange: 'blue', amount: -COLOR_INCREMENT})}
            />
            <View style={{width: 50, height: 50, backgroundColor: `rgb(${red}, ${green}, ${blue} )`} } />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;