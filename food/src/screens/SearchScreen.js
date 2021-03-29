import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const SearchApi = async searchTerm => {
        console.log('Hi there');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'NYC'
                }
            });
            setResults(response.data.businesses);
            // setErrMsg('');
        }
        catch (err) {
            setErrMsg('Something went wrong');
        }
    };
    useEffect(() => {
        SearchApi('pasta');
    }, [])
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