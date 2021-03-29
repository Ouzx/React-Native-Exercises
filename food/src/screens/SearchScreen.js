import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [SearchApi, results, errMsg] = useResults();

    const filterResultByPrice = price => {
        return results.filter(result => { return result.price === price });
        
    };

    return (
        <View>
            <SearchBar
                term={term}
                onTermChanged={setTerm}
                onTermSubmit={() => SearchApi(term)}
            />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <Text>We have found { results.length } results</Text>
            <ResultList title='Cost Effective' results={ filterResultByPrice('$') }/>
            <ResultList title='Bit Pricier' results={ filterResultByPrice('$$') }/>
            <ResultList title='Big Spender' results={ filterResultByPrice('$$$') }/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen; 