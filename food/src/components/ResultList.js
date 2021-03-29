import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from '../components/ResultsDetail';

const ResultList = ({ title, results }) => {
    return (
        <View style={ styles.container }>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <ResultDetail result={ item }/>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    }
});

export default ResultList;