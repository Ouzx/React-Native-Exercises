import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PasswordScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text> Enter your password: </Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={newValue => setPassword(newValue)}          
            />
        { PasswordValidator(password)}
        </View>
    );
}

const PasswordValidator = (password) => {
    return password.length > 5
        ? null
        : <Text>Password must be longer than 5 characters. </Text>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderWidth: 1,
        borderColor: '#000125',
        borderRadius: 10,
        height: 40,
        paddingLeft: 10
    }
});

export default PasswordScreen;