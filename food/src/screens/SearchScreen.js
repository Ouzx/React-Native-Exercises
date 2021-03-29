import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [SearchApi, results, errMsg] = useResults();
    return (
        <View>
            <SearchBar
                term={term}
                onTermChanged={setTerm}
                onTermSubmit={() => SearchApi(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <Text>We have found { results.length } results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen; 