import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChanged}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather
                name='search'
                style={styles.iconStyle}            
            />
            <TextInput
                placeholder='Search'
                autoCapitalize='none'
                autoCorrect={ false }
                value={term}
                onChangeText={newTerm => onTermChanged(newTerm)}
                style={styles.inputStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#cfd8dc',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        padding: 5,
    },
    inputStyle: {
        // borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 15,
    }
});

export default SearchBar;