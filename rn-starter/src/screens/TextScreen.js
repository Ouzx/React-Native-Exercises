import { StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react';

const TextScreen = () => {
    return (
        <View>
            <Text>
                Text Screen
            </Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderWidth: 1,
        borderColor: '#000125',
        borderRadius: 10,
        height: 40
    }
});

export default TextScreen;