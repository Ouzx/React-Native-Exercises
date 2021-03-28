import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = ({ change_number }, { payload }) => {
    return change_number + payload < 0
        ? { change_number: change_number }
        : {change_number: change_number + payload };
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { change_number: 0 });
    const INCREMENT = 5;
    return (
        <View>
            <Text> Counter is: { state.change_number }</Text>
            <Button
                title='Increase'
                onPress={() => {
                    dispatch({ payload: INCREMENT });
                }}
            />
            <Button
                title='Decrease'
                onPress={() => {
                    dispatch({ payload: -INCREMENT });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;